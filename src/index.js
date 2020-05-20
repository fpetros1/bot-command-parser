import BotCommandParserImpl from './bot-command-parser';
import TestExecutor from './test/test-executor';

export const BotCommandParser = BotCommandParserImpl;

if (process.argv.indexOf('--test') !== -1) {
    TestExecutor.doTests();
}