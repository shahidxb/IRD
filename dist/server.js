"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
const logger_1 = require("./shared/logger");
process.on('uncaughtException', error => {
    logger_1.errorlogger.error(error);
    process.exit(1);
});
let server;
const prisma = new client_1.PrismaClient({
    log: ['warn', 'error'],
});
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            logger_1.logger.info('Connected to the database successfully');
            server = app_1.default.listen(index_1.default.port, () => {
                logger_1.logger.info(`Application listening on port ${index_1.default.port}`);
            });
        }
        catch (err) {
            logger_1.errorlogger.error('Failed to connect to the database', err);
        }
    });
}
bootstrap();
process.on('unhandledRejection', error => {
    if (server) {
        server.close(() => {
            logger_1.errorlogger.error(error);
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
});
process.on('SIGTERM', () => {
    logger_1.logger.info('SIGTERM is received');
    if (server) {
        server.close();
    }
});
exports.default = prisma;
