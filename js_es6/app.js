import logger, {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
    TYPE_DEBUG,
    TYPE_INFO,
    TYPE_TRACE,
} from './logger.js';

//Can use below way to import all constant:
import * as constants from './constants.js'
console.log(constants);

// console.log(logger);
// console.log(typeof logger);
logger("Debug: Replacing default configurations inside config.properties",TYPE_DEBUG);
logger("An error occurred",'error');
logger("Warning: Modify this module can potentially lead to system down",TYPE_WARN);
logger("Info: Console is running... ",TYPE_INFO)
logger("Debug: Replacing default configurations inside config.properties",TYPE_DEBUG);
logger("An error occurred",TYPE_ERROR);