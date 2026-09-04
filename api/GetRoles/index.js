module.exports = async function (context, req) {
  context.log("Claims received:", JSON.stringify(req.body));
  context.res = {
    body: {
      roles: ["legal"]
    }
  };
};