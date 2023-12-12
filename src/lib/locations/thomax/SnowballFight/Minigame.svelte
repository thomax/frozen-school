<script>
  import kaboom from 'kaboom'
  import 'kaboom/global'
  import {onMount} from 'svelte'
  import {changeHealth} from '../../../dataStores/characterStore.js'
  import {goToLocation} from '../../../dataStores/locationStore.js'

  const mainElement = document.getElementById('gameComponent')
  const canvasWidth = mainElement ? mainElement.offsetWidth : 800
  const canvasHeight = mainElement ? mainElement.offsetHeight - 100 : 400
  const speed = 300 // Player movement speed
  const jumpForce = 500
  const blockSizeX = canvasWidth / 30
  const blockSizeY = canvasHeight / 16
  const snowballSize = 10
  let isSpriteLoaded = false

  // Initialize Kaboom
  kaboom({
    width: canvasWidth,
    height: canvasHeight,
    background: [0, 0, 0, 0.5]
  })

  loadSprite('player', 'http://localhost:3001/assets/HenningT/Player.png')
    .then(() => (isSpriteLoaded = true))
    .catch(() => (isSpriteLoaded = false))

  scene('game', () => {
    setGravity(1800)

    const player = isSpriteLoaded
      ? add([
          sprite('player'),
          scale(0.06),
          pos(canvasWidth / 2, canvasHeight / 2),
          area(),
          body(),
          'player'
        ])
      : add([
          rect(30, 30),
          color(255, 0, 0),
          pos(canvasWidth / 2, canvasHeight / 2),
          area(),
          body(),
          'player'
        ])

    addLevel(
      [
        '=========================   ==',
        '=                            =',
        '=                            =',
        '=                            =',
        '=                 =          =',
        '=     =                      =',
        '=                            =',
        '=                            =',
        '=                    =       =',
        '=                            =',
        '=       =                    =',
        '=                =           =',
        '=                            =',
        '=                            =',
        '=                            =',
        '=============================='
      ],
      {
        tileWidth: blockSizeX,
        tileHeight: blockSizeY,
        pos: vec2(0, 0),
        tiles: {
          '=': () => [
            rect(blockSizeX, blockSizeY),
            outline(0),
            color(127, 200, 255),
            area(),
            body({isStatic: true}),
            'border'
          ]
        }
      }
    )

    function spawnSnowball() {
      const side = Math.random() > 0.5 ? 'left' : 'right'
      let startX
      let velocity
      switch (side) {
        case 'left':
          startX = snowballSize * 2
          velocity = vec2(randi(100, 200), randi(10, 100))
          break
        case 'right':
          startX = width() - snowballSize * 2
          velocity = vec2(-randi(100, 200), randi(10, 100))
          break
      }
      const snowballPosition = vec2(startX, randi(0, height()))
      add([
        circle(snowballSize),
        pos(snowballPosition),
        area(),
        body(),
        move(player.pos.angle(snowballPosition), randi(500, 1400)),
        'snowball',
        offscreen({destroy: true})
      ])
    }

    function jump() {
      if (player.isGrounded()) {
        player.jump(jumpForce)
      }
    }

    // Player control logic
    onKeyDown('a', () => {
      player.move(-speed, 0)
    })
    onKeyDown('d', () => {
      player.move(speed, 0)
    })
    onKeyPress('space', () => {
      player.jump()
    })
    onKeyDown('left', () => {
      player.move(-speed, 0)
    })
    onKeyDown('right', () => {
      player.move(speed, 0)
    })
    onKeyPress('up', () => {
      player.jump()
    })

    // Spawn a snowball every so often
    loop(1, () => {
      spawnSnowball()
    })

    // Handle snowball in the face
    onCollide('player', 'snowball', (player, snowball) => {
      const damage = randi(2, 9)
      changeHealth(-damage)
      destroy(snowball)
    })

    // Snowballs disappear when colliding
    onCollide('snowball', 'snowball', (snowball1, snowball2) => {
      destroy(snowball1)
      destroy(snowball2)
    })

    onUpdate('player', (player) => {
      if (player.pos.y < 0) {
        go('gameOver')
        goToLocation('dh')
      }
    })
  })

  onMount(() => {
    setTimeout(() => {
      go('game')
    }, 1000)
  })
</script>
