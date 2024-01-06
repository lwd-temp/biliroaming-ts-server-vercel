// source: bilibili/metadata/device/device.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.bilibili.metadata.device.Device', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.metadata.device.Device = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.metadata.device.Device, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.metadata.device.Device.displayName = 'proto.bilibili.metadata.device.Device';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.metadata.device.Device.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.metadata.device.Device.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.metadata.device.Device} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.device.Device.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    build: jspb.Message.getFieldWithDefault(msg, 2, 0),
    buvid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    mobiApp: jspb.Message.getFieldWithDefault(msg, 4, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 5, ""),
    device: jspb.Message.getFieldWithDefault(msg, 6, ""),
    channel: jspb.Message.getFieldWithDefault(msg, 7, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 8, ""),
    model: jspb.Message.getFieldWithDefault(msg, 9, ""),
    osver: jspb.Message.getFieldWithDefault(msg, 10, ""),
    fpLocal: jspb.Message.getFieldWithDefault(msg, 11, ""),
    fpRemote: jspb.Message.getFieldWithDefault(msg, 12, ""),
    versionName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    fp: jspb.Message.getFieldWithDefault(msg, 14, ""),
    fts: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.metadata.device.Device}
 */
proto.bilibili.metadata.device.Device.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.metadata.device.Device;
  return proto.bilibili.metadata.device.Device.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.metadata.device.Device} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.metadata.device.Device}
 */
proto.bilibili.metadata.device.Device.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuild(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuvid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobiApp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsver(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFpLocal(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFpRemote(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionName(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setFp(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.metadata.device.Device.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.metadata.device.Device.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.metadata.device.Device} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.device.Device.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBuild();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBuvid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMobiApp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOsver();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getFpLocal();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFpRemote();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getVersionName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getFp();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getFts();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
};


/**
 * optional int32 app_id = 1;
 * @return {number}
 */
proto.bilibili.metadata.device.Device.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 build = 2;
 * @return {number}
 */
proto.bilibili.metadata.device.Device.prototype.getBuild = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setBuild = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string buvid = 3;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getBuvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setBuvid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string mobi_app = 4;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getMobiApp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setMobiApp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string platform = 5;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string device = 6;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string channel = 7;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string brand = 8;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string model = 9;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string osver = 10;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getOsver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setOsver = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string fp_local = 11;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getFpLocal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setFpLocal = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string fp_remote = 12;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getFpRemote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setFpRemote = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string version_name = 13;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getVersionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setVersionName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string fp = 14;
 * @return {string}
 */
proto.bilibili.metadata.device.Device.prototype.getFp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setFp = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int64 fts = 15;
 * @return {number}
 */
proto.bilibili.metadata.device.Device.prototype.getFts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.metadata.device.Device} returns this
 */
proto.bilibili.metadata.device.Device.prototype.setFts = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


goog.object.extend(exports, proto.bilibili.metadata.device);
