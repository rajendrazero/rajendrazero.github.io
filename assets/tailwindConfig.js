    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'border-color': '#000000',
            'second-border-color': '#131313',
            'text-color': '#ffffff',
            'main-color': '#00ffee',
            'main-color-rgb': '0, 255, 238',
          },
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
          animation: {
            'cursor': 'cursor 0.6s infinite',
            'typing': 'typing 20s steps(14) infinite',
            'words': 'words 20s infinite',
            'float': 'float 6s ease-in-out infinite',
            'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'bounce': 'bounce 1s infinite',
            'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
          },
          keyframes: {
            cursor: {
              'to': { 'border-left-color': 'var(--main-color)' }
            },
            typing: {
              '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
              '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': { width: 'calc(100% + 8px)' }
            },
            words: {
              '0%, 20%': { content: '"Front End Designer"' },
              '21%, 40%': { content: '"Web Designer"' },
              '41%, 60%': { content: '"Backend Developer"' },
              '61%, 80%': { content: '"Data Base Designer"' },
              '81%, 100%': { content: '"UI / UX Designer"' }
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' }
            },
            pulse: {
              '0%, 100%': { opacity: '1' },
              '50%': { opacity: '0.5' }
            },
            bounce: {
              '0%, 100%': { 
                transform: 'translateY(-25%)',
                'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
              },
              '50%': {
                transform: 'none',
                'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
              }
            },
            shake: {
              '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
              '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
              '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
              '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
            }
          }
        }
      }
    }
