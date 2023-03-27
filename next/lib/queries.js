export const getPage = `*[_type == "page"]{
    ...,
   
  }`;
export const getHero = `*[_type == "hero"][0]{
  ...,
CTA[0]->
}`;

export const getBrands = `*[_type == "brandInfo"]{
  ...,

}`;

export const getSection1 = `*[_type == "section1"][0]{
  ...,
 CTA[0]->
}`;

export const getSection2 = `*[_type == "section2"][0]{
  ...,
 CTA[0]->
}`;

export const getSection3 = `*[_type == "section3"][0]{
  ...,
 CTA[0]->
}`;

export const getSection4 = `*[_type == "section4"][0]{
  ...,
 CTA[0]->
}`;

export const getSocials = `*[_type == "social"][]{
  ...,

}`;
export const getFAQ = `*[_type == "faq"][]{
  ...,

}`;
