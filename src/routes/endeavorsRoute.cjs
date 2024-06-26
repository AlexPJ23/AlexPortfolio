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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endeavorsRouter = void 0;
var express = require("express");
var cors = require("cors");
var mongoose_1 = require("mongoose");
var database_service_1 = require("../services/database.service.cjs");
exports.endeavorsRouter = express.Router();
exports.endeavorsRouter.use(express.json());
var allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000']; ;
exports.endeavorsRouter.use(cors({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
exports.endeavorsRouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var page, perPage, endeavors, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = parseInt(req.query.page) || 1;
                perPage = parseInt(req.query.perPage) || 3;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, database_service_1.collections.endeavors
                        .find()
                        .skip((page - 1) * perPage)
                        .limit(perPage)
                        .toArray()];
            case 2:
                endeavors = _a.sent();
                res.status(200).json(endeavors);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(500).send('Error fetching endeavors from database');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.endeavorsRouter.get('/count', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var count, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database_service_1.collections.endeavors.countDocuments()];
            case 1:
                count = _a.sent();
                res.status(200).json({ total: count });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send('Error fetching endeavor count from database');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.endeavorsRouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, query, endeavor, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                query = { _id: new mongoose_1.Types.ObjectId(id) };
                return [4 /*yield*/, database_service_1.collections.endeavors.findOne(query)];
            case 2:
                endeavor = _b.sent();
                if (!endeavor) {
                    res.status(404).send('Endeavor not found');
                    return [2 /*return*/];
                }
                res.status(200).json(endeavor);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(500).send('Error fetching endeavor from database');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.endeavorsRouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var endeavor, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                endeavor = req.body;
                return [4 /*yield*/, database_service_1.collections.endeavors.insertOne(endeavor)];
            case 1:
                result = _a.sent();
                result
                    ? res.status(201).json(result)
                    : res.status(404).send('Error creating endeavor');
                ;
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).send('Error creating endeavor');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.endeavorsRouter.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, query, result, error_4;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                query = { _id: new mongoose_1.Types.ObjectId(id) };
                return [4 /*yield*/, database_service_1.collections.endeavors.updateOne(query, { $set: req.body })];
            case 2:
                result = _b.sent();
                result.modifiedCount > 0
                    ? res.status(200).send('Endeavor updated successfully')
                    : res.status(404).send('Endeavor not found');
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                res.status(500).send('Error updating endeavor');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.endeavorsRouter.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, query, result, error_5;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                query = { _id: new mongoose_1.Types.ObjectId(id) };
                return [4 /*yield*/, database_service_1.collections.endeavors.deleteOne(query)];
            case 2:
                result = _b.sent();
                result.deletedCount > 0
                    ? res.status(200).send('Endeavor deleted successfully')
                    : res.status(404).send('Endeavor not found');
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                res.status(500).send('Error deleting endeavor');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = exports.endeavorsRouter;
