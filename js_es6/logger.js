//Export without default
export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';
export const TYPE_DEBUG = 'debug';
export const TYPE_INFO = 'info';
export const TYPE_TRACE = 'trace';
function logger(log,type='log'){
    console[type](log);
}
//Export with default
export default logger;