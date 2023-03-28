export default {
    install: (app, options) => {
        app.config.globalProperties.$hello = (whois) => {

            return `Hello ${whois}! I'm ${options.plugName}`
        }
    }
}