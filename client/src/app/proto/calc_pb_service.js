// package: proto
// file: proto/calc.proto

var proto_calc_pb = require("../proto/calc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Calculator = (function () {
  function Calculator() {}
  Calculator.serviceName = "proto.Calculator";
  return Calculator;
}());

Calculator.Plus = {
  methodName: "Plus",
  service: Calculator,
  requestStream: false,
  responseStream: false,
  requestType: proto_calc_pb.CalcRequest,
  responseType: proto_calc_pb.CalcReply
};

exports.Calculator = Calculator;

function CalculatorClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CalculatorClient.prototype.plus = function plus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Calculator.Plus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CalculatorClient = CalculatorClient;

