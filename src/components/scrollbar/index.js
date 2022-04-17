const scrollBar = {
    track: '#4B4B4B',
    thumb: '#C4C4C4',
    active: '#959595'
  };
  export default function scrollbar(options = scrollBar) {
    return {
      scrollbarColor: `${options.thumb} ${options.track}`,
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: 5,
        borderRadius: 8,
        backgroundColor: options.track
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: options.thumb,
        minHeight: 24,
      },
      '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: options.active
      },
      '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
        backgroundColor: options.active
      },
      '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
        backgroundColor: options.active
      },
      '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
        backgroundColor: options.track
      }
    };
  }