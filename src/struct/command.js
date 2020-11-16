class Command {
    constructor(name, options) {
        this.name = name || null;
        this.description = options.description || 'No description provided';
        this.aliases = options.aliases || [];
        this.category = options.category || 'Miscellaneous';
        this.useage = options.usage || '';
    }
}

module.exports = Command;