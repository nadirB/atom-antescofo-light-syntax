'use babel'

module.exports = {
  activate() {
    require('atom-package-deps').install('atom-antescofo-light-syntax')
      .then(function() {
        console.log('All dependencies installed, good to go')
      })
  }
}
