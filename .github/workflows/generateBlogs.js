const fs = require("fs");

const blogs = [

{
title:"Dubai VAT Compliance Updates",

summary:"Businesses in the UAE are preparing for revised VAT compliance procedures expected in upcoming regulatory updates.",

date:new Date().toLocaleDateString()
},

{
title:"UAE Corporate Tax Reporting",

summary:"Companies operating in Dubai may need improved financial reporting under corporate tax regulations.",

date:new Date().toLocaleDateString()
},

{
title:"Free Zone Tax Benefits",

summary:"UAE free zone companies continue receiving tax advantages while adapting to new compliance frameworks.",

date:new Date().toLocaleDateString()
}

];

fs.writeFileSync("blogs.json", JSON.stringify(blogs,null,2));

console.log("Blogs Updated");
