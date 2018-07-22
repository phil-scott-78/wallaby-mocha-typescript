module.exports = wallaby => {
    process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
  
    return {
      files: ['src/**/*', 'package.json', 'tsconfig.json'],
  
      tests: ['tests/**/*.spec.ts'],
  
      env: {
        type: 'node',
        runner: 'node',
      },
  
      preprocessors: {
        '**/*.js?(x)': file => require('@babel/core').transform(
          file.content,
          {sourceMap: true, compact: false, filename: file.path})
      },
   
      testFramework: 'mocha',
  
      debug: true
    }
  }