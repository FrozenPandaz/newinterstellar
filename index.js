const { readFileSync, writeFileSync } = require('fs');

(async () => {
//  const path = 'node_modules/jest-config/build/readConfigFileAndSetRootDir.js';
//  const contents = readFileSync(path, 'utf-8');
//
//  writeFileSync(
//    path,
//    contents.replace(
//      "const tsNode = await import('ts-node');",
//      "require('ts-node'); const tsNode = await import('ts-node');"
//      ).replace(
//      'return tsNode.register',
//      'console.log(tsNode); console.log(__dirname); console.log(require("ts-node")); return tsNode.register'
//    )
//  );
//  console.log('monkey patched jest');
//
//  const tsNodePath = 'node_modules/ts-node/dist/index.js';
//  const contents2 = readFileSync(tsNodePath, 'utf-8');
//
//  writeFileSync(
//    tsNodePath,
//    contents2
//      .replace('const path_1 =', 'console.log("BEFORE PATH"); const path_1 =')
//      .replace(
//        'exports.REGISTER_INSTANCE',
//        'console.log("BEFORE REGISTER INSTANCE"); exports.REGISTER_INSTANCE'
//      )
//    .replace(
//      'exports.env = process.env;',
//      'console.log("before exports.env"); exports.hello = "123"; exports.env = process.env;'
//    )
//
//    + 'console.log("FINISHED FILE");'
//  );
//  console.log('monkey patched ts-node');
//
//  console.log(readFileSync(tsNodePath, 'utf-8'));

  const nxPath = 'node_modules/nx/src/plugins/js/utils/register.js';
  const contents3 = readFileSync(nxPath, 'utf-8');

  writeFileSync(
    nxPath,
    contents3
      .replace('const tsConfigPath = configFilename ? (0, path_1.join)(path, configFilename) : path;', 'console.trace(); const tsConfigPath = configFilename ? (0, path_1.join)(path, configFilename) : path;')

    + 'console.log("FINISHED FILE");'
    );
  console.log('monkey patched nx');

  console.log(readFileSync(nxPath, 'utf-8'));





})();
