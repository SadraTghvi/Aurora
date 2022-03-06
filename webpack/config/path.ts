import * as path from 'path'

const BASE_DIR = path.resolve(__dirname, '../../')
const APP_DIR = path.resolve(BASE_DIR, 'React')
const DIST_DIR = path.resolve(APP_DIR, 'dist')
const SRC_DIR = path.resolve(APP_DIR, 'src')

export { BASE_DIR, APP_DIR, DIST_DIR, SRC_DIR }
