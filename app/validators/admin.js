const { Rule, LinValidator } = require("@core/lin-validator-v2");

// const { Admin } = require("@models/admin");
// const { LoginType } = require("@lib/enum");

class AdminLoginValidator extends LinValidator {
    constructor() {
      super();
      this.email = [
        new Rule('isEmail', '电子邮箱不符合规范，请输入正确的邮箱')
      ]
      this.password = [
        // 用户密码指定范围
        new Rule('isLength', '密码至少6个字符，最多22个字符', {
          min: 6,
          max: 22
        }),
        new Rule(
          'matches',
          '密码长度必须在6~22位之间，包含字符、数字和 _ ',
          '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]'
        )
      ]
    }
  }

module.exports = {
    AdminLoginValidator
}
