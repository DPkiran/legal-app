module.exports = async function (context, req) {
  const claims = req.body?.claims || [];
  const legalGroupId = "4809f241-0a7a-408f-8ce8-e80b62b13753";

  const groupsClaim = claims.find(c => c.typ === "groups");
  const isLegalMember = groupsClaim && groupsClaim.val.includes(legalGroupId);

  context.res = {
    body: {
      roles: isLegalMember ? ["legal"] : []
    }
  };
};