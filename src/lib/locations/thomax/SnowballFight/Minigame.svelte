<script>
  import kaboom from 'kaboom'
  import 'kaboom/global'
  import {onMount} from 'svelte'
  import {changeHealth} from '../../../dataStores/characterStore.js'
  import {goToLocation} from '../../../dataStores/locationStore.js'
  import playerImcSrc from '../../../../assets/HenningT/Player.png'

  const mainElement = document.getElementById('gameComponent')
  const canvasWidth = mainElement ? mainElement.offsetWidth : 800
  const canvasHeight = mainElement ? mainElement.offsetHeight - 100 : 400
  const speed = 300 // Player movement speed
  const jumpForce = 500
  const gravity = 1800 // affects both player and snowballs
  const blockSizeX = canvasWidth / 30
  const blockSizeY = canvasHeight / 16
  const snowballSize = 10
  const snowballSpawnRate = 0.7 // number of times per second a snowball spawns (lower is more often)
  let isSpriteLoaded = false

  // Initialize Kaboom
  kaboom({
    width: canvasWidth,
    height: canvasHeight,
    background: [0, 0, 0, 0.5]
  })

  loadSprite('player', playerImcSrc)
    .then(() => (isSpriteLoaded = true))
    .catch(() => (isSpriteLoaded = false))

  scene('game', () => {
    setGravity(gravity)

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
        '=                            =',
        '=                            =',
        '=                            =',
        '=                            =',
        '=                            =',
        '=                    =       =',
        '=       =                    =',
        '=                            =',
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
          startX = snowballSize * 3
          velocity = vec2(randi(100, 200), 0)
          break
        case 'right':
          startX = width() - snowballSize * 3
          velocity = vec2(-randi(100, 200), 0)
          break
      }
      const snowballPosition = vec2(startX, randi(0, height()))
      const snowballSpeed = randi(800, 1800)
      add([
        circle(snowballSize),
        pos(snowballPosition),
        area(),
        body(),
        move(player.pos.angle(snowballPosition), snowballSpeed),
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
    loop(snowballSpawnRate, () => {
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

    // The game ends when the player exits at the upper edge of the screen
    onUpdate('player', (player) => {
      if (player.pos.y < 0) {
        go('gameOver')
      }
    })
  })

  scene('gameOver', () => {
    goToLocation('hall')
  })

  // Wait until elements are in place before starting the game
  // This should ensure that loadSprite completes the image loading
  onMount(() => {
    setTimeout(() => {
      go('game')
    }, 1000)
  })
</script>
