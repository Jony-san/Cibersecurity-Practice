import User from "./User.js";
import Company from "./Company.js";

// 1 company → many users
Company.hasMany(User, {
  foreignKey: "companyId",
  as: "users"
});

// 1 user → 1 company
User.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company"
});

export { User, Company };
