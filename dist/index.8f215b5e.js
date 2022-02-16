// const { default: axios } = require("axios");
const main = async ()=>{
    const item = await axios.get('https://restcountries.com/v2/all');
    const res = item.data;
    console.log(res);
    return res;
};
main(); //  const m = main.map((x) => {
 //      return x.name
 //  })
 //  console.log(m);

//# sourceMappingURL=index.8f215b5e.js.map
