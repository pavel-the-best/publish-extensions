/********************************************************************************
 * Copyright (c) 2020 TypeFox and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 ********************************************************************************/

// @ts-check
const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * @param {string} command
 * @param {import('child_process').ExecOptions} [options]
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
module.exports = async (command, options) => {
  console.log(`Running: ${command}`);
  return exec(command, options);
};
