import logger, {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
    TYPE_DEBUG,
    TYPE_INFO,
    TYPE_TRACE,
} from './logger.js';

// console.log(logger);
// console.log(typeof logger);
logger("An error occurred",'error');
logger("Warning: Modify this module can potentially lead to system down",TYPE_WARN);
logger("Info: Console is running... ",TYPE_INFO)
logger("Debug: Replacing default configurations inside config.properties",TYPE_DEBUG);