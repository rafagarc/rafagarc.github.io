(function(Scratch) {
  'use strict';
  class Navigator {
    getInfo() {
      return {
        id: 'simplenavigate',
        name: 'Chapter Navigator',
        blocks: [
          {
            opcode: 'goToChapter',
            blockType: Scratch.BlockType.COMMAND,
            text: 'go to chapter [URL]',
            arguments: {
              URL: {
                type: Scratch.BlockType.STRING,
                defaultValue: 'chapter2.html'
              }
            }
          }
        ]
      };
    }
    goToChapter(args) {
      window.location.href = args.URL;
    }
  }
  Scratch.extensions.register(new Navigator());
})(Scratch);