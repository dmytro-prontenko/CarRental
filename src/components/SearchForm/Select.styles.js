export const makeStyles = {
  select: (customStyles) => ({
    ...customStyles,
  }),
  option: (customStyles) => ({
    ...customStyles,
  }),
  control: (customStyles) => ({
    ...customStyles,
    height: "48px",
    borderRadius: "14px",
    background: "#F7F7FB",

    //*
    width: "224px",
    textAlign: "start",
    //*

    fontSize: "12px",
    color: "#C7CCDC80",
  }),
  valueContainer: (customStyles) => ({
    ...customStyles,
    paddingTop: "4px",
    paddingLeft: "20px",
  }),

  indicatorSeparator: (customStyles) => ({
    ...customStyles,
    border: "none",
  }),
  dropdownIndicator: (customStyles) => ({
    ...customStyles,
    color: "#121417",
  }),
  menu: (customStyles) => ({
    ...customStyles,
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    background: "#FFF",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),
  singleValue: (customStyles) => ({
    ...customStyles,
    color:'#121417',
    
  }),
  container: (customStyles) => ({
    ...customStyles,
    color: "rgba(18, 20, 23, 0.20)",

    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  }),
};
// ----------------------------------------
export const priceStyles = {
  select: (customStyles) => ({
    ...customStyles,
    
  }),
  option: (customStyles) => ({
    ...customStyles,
    
  }),
  control: (customStyles) => ({
    ...customStyles,

    height: "48px",
    borderRadius: "14px",
    background: "#F7F7FB",

    //*
    width: "153px",
    textAlign: "start",
    //*

    fontSize: "12px",
    color: "#C7CCDC80",
  }),
  valueContainer: (customStyles) => ({
    ...customStyles,
    paddingTop: "4px",
    paddingLeft: "20px",
    

  }),

  indicatorSeparator: (customStyles) => ({
    ...customStyles,
    border: "none",
    
  }),
  dropdownIndicator: (customStyles) => ({
    ...customStyles,
    color: "#121417",
    
  }),
  menu: (customStyles) => ({
    ...customStyles,
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    background: "#FFF",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),
  singleValue: (customStyles) => ({
    ...customStyles,
    color:'#121417',
    '&::before':{content:'"To "'},
    '&::after':{content:'"$ "'}
    
  }),
  container: (customStyles) => ({
    ...customStyles,
    color: "rgba(18, 20, 23, 0.20)",

    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  }),
};
