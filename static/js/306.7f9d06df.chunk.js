(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[306],{4231:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(9439),c=r(8391),s=r(774),o=r(5536),a=r(6445),l=[{title:"Home",url:"/dashboard"},{title:" All Users",url:"/dashboard-users"},{title:" All Orders",url:"/dashboard-orders"},{title:" create Product",url:"/dashboard-create-product"},{title:"Create Category",url:"/dashboard-create-category"},{title:"Logout",url:"/logout"}],i=r(5382),u=r(3712),d=function(e){var t=e.active,r=(0,s.v9)((function(e){return e.seller})).isSeller;return(0,u.jsx)("div",{className:"sm:mt-0 mt-16 block 800px:".concat(i.Z.noramlFlex),children:l&&l.map((function(e,n){return(0,u.jsx)("div",{className:"flex justify-center",children:r&&"/profile"===e.url?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)(o.rU,{to:e.url,className:"".concat(t===n+1?"text-[#17dd1f]":"text-black  800px:text-[#fff]"," sm:text-xl text-xl pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer"),children:e.title})},n)}))})},p=r(1900),x=function(){var e=(0,c.useState)(!1),t=(0,n.Z)(e,2),r=t[0],l=t[1];(0,s.v9)((function(e){return e.seller})).seller;return(0,u.jsxs)("div",{className:"w-full h-[50px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4",children:[(0,u.jsx)("div",{children:(0,u.jsx)(a.HjU,{size:40,className:"ml-4",onClick:function(){return l(!0)}})})," ",(0,u.jsx)("div",{children:(0,u.jsx)(o.rU,{to:"/",children:(0,u.jsx)("img",{src:"/ecommerce/react-node/admin/media/logo.png",alt:"",width:"120",style:{height:"30px"}})})}),r&&(0,u.jsx)("div",{className:"fixed w-full bg-[#0000005f] z-9999 h-full top-0 left-0",children:(0,u.jsxs)("div",{className:"fixed w-[100%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll",children:[(0,u.jsxs)("div",{className:"w-full justify-between flex pr-3",children:[(0,u.jsx)("div",{}),(0,u.jsx)(p.ySC,{size:38,className:"ml-4 mt-5",onClick:function(){return l(!1)}})]}),(0,u.jsx)(d,{active:1}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})}),(0,u.jsx)("div",{className:"flex items-center",children:(0,u.jsx)("div",{className:"flex items-center mr-4"})})]})}},5273:function(e,t,r){"use strict";r(8391);var n=r(3690),c=r(4791),s=r(1900),o=r(5536),a=r(8312),l=r(9229),i=r(8773),u=r(7227),d=r(3712);t.Z=function(e){var t=e.active,r=(0,i.s0)();return(0,d.jsxs)("div",{className:"w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10",children:[(0,d.jsx)("div",{className:"w-full flex items-center p-4",children:(0,d.jsxs)(o.rU,{to:"/dashboard",className:"w-full flex items-center",children:[(0,d.jsx)(s.toC,{size:18,color:"".concat(1===t?"crimson":"#555")}),(0,d.jsx)("h5",{className:"hidden 800px:block pl-2 text-[17px] font-[400] ".concat(1===t?"text-[crimson]":"text-[#555]"),children:"Dashboard"})]})}),(0,d.jsx)("div",{className:"w-full flex items-center p-4",children:(0,d.jsxs)(o.rU,{to:"/dashboard-users",className:"w-full flex items-center",children:[(0,d.jsx)(c.TSD,{size:20,color:"".concat(4===t?"crimson":"#555")}),(0,d.jsx)("h5",{className:"hidden 800px:block pl-2 text-[17px] font-[400] ".concat(4===t?"text-[crimson]":"text-[#555]"),children:"All Users"})]})}),(0,d.jsx)("div",{className:"w-full flex items-center p-4",children:(0,d.jsxs)(o.rU,{to:"/dashboard-create-product",className:"w-full flex items-center",children:[(0,d.jsx)(n.A6B,{size:20,color:"".concat(5===t?"crimson":"#555")}),(0,d.jsx)("h5",{className:"hidden 800px:block pl-2 text-[16px] font-[400] ".concat(5===t?"text-[crimson]":"text-[#555]"),children:"Create Product"})]})}),(0,d.jsx)("div",{className:"w-full flex items-center p-4",children:(0,d.jsxs)(o.rU,{to:"/dashboard-create-category",className:"w-full flex items-center",children:[(0,d.jsx)(n.A6B,{size:20,color:"".concat(5===t?"crimson":"#555")}),(0,d.jsx)("h5",{className:"hidden 800px:block pl-2 text-[16px] font-[400] ".concat(5===t?"text-[crimson]":"text-[#555]"),children:"Create Category"})]})}),(0,d.jsx)("div",{className:"w-full flex items-center p-4",children:(0,d.jsxs)(o.rU,{to:"/dashboard-refunds",className:"w-full flex items-center",children:[(0,d.jsx)(c.xkh,{size:20,color:"".concat(10===t?"crimson":"#555")}),(0,d.jsx)("h5",{className:"hidden 800px:block pl-2 text-[16px] font-[400] ".concat(10===t?"text-[crimson]":"text-[#555]"),children:"Refunds"})]})}),(0,d.jsxs)("div",{className:"cursor-pointer w-full flex items-center p-4",onClick:function(){a.Z.get("".concat(l.fw,"/user/logout"),{withCredentials:!0}).then((function(e){console.log(e),!0===e.data.success?(localStorage.removeItem("token"),window.location.reload(!0),r("/logout")):u.toast.error("Something went wrong.Refresh the page")})).catch((function(e){u.toast.error("Something went wrong.Refresh the page")}))},children:[(0,d.jsx)(n.SPH,{size:20,color:8===t?"red":""}),(0,d.jsx)("span",{className:"text-[16px] pl-3 ".concat(8===t?"text-[red]":""," 800px:block hidden"),children:"Logout"})]})]})}},9003:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(8391),c=r(4231),s=r(5273),o=r(8747),a=r(2708),l=r(3690),i=r(774),u=r(5536),d=r(2233),p=r(1011),x=r(7227),f=r(8773),h=r(3712),m=function(){var e=(0,f.s0)(),t=(0,i.v9)((function(e){return e.products})),r=t.products,c=t.isLoading,s=(0,i.v9)((function(e){return e.seller})).seller;(0,n.useEffect)((function(){console.log(s.role)}),[]);var m=(0,i.I0)();(0,n.useEffect)((function(){m((0,d.Rv)(s._id))}),[m]);var v=[{field:"no",headerName:"Sr no",minWidth:100,flex:.3},{field:"name",headerName:"Name",minWidth:170,flex:.5},{field:"Stock",headerName:"Stock",type:"number",minWidth:120,flex:.3},{field:"Preview",flex:.4,minWidth:120,headerName:"",type:"number",sortable:!1,renderCell:function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.rU,{to:"".concat("https://demo.websolutionshub.in/ecommerce/react-node","/product/").concat(e.id),children:(0,h.jsx)(o.Z,{children:(0,h.jsx)(l.Zju,{size:20})})})})}},{field:"Delete",flex:.2,minWidth:120,headerName:"",type:"number",sortable:!1,renderCell:function(t){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{onClick:function(){return r=t.id,void("Guest"===s.role?x.toast.error("Guest are not allowed to delete"):(m((0,d.Ir)(r)),e("/success-page")));var r},children:(0,h.jsx)(l.VPh,{size:20})})})}}],w=[];return r&&r.forEach((function(e,t){w.push({no:t+1,id:e._id,name:e.name,price:"Rs "+e.discountPrice,Stock:e.stock,sold:null===e||void 0===e?void 0:e.sold_out})})),v[0].onRowClick=function(e){if("Delete"===e.field)console.log("Row clicked in fieldName column:",e.row);else e.id;console.log("Row clicked in fieldName column:",e.field)},(0,h.jsx)(h.Fragment,{children:c?(0,h.jsx)(p.Z,{}):(0,h.jsxs)("div",{className:"w-full mx-4 pt-1 mt-10 bg-white",children:[(0,h.jsx)("h3",{className:"800px:text-[19px] text-[22px] font-Poppins p-4",children:"All products"}),(0,h.jsx)(a._$,{rows:w,columns:v,pageSize:10,disableSelectionOnClick:!0,autoHeight:!0})]})})},v=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(c.Z,{}),(0,h.jsxs)("div",{className:"flex justify-between w-full",children:[(0,h.jsx)("div",{className:"hidden md:block  w-[80px] 800px:w-[180px]",children:(0,h.jsx)(s.Z,{active:3})}),(0,h.jsx)("div",{className:"w-full justify-center flex",children:(0,h.jsx)(m,{})})]})]})}},2233:function(e,t,r){"use strict";r.d(t,{Dg:function(){return m},Ir:function(){return h},Rv:function(){return f},k4:function(){return x},ry:function(){return p}});var n=r(4165),c=r(5861),s=r(8312),o=r(9229),a=r(2789),l=r.n(a);var i={c:function(e){var t=l()(e).toString();return parseInt(t.slice(0,9),16).toString().padStart(9,"0")}(localStorage.getItem("cacheAllProducts"))},u=s.Z.create({baseURL:o.fw}),d=localStorage.getItem("adtoken");u.interceptors.request.use((function(e){return d&&(e.headers.Authorization="Bearer ".concat(d)),e}),(function(e){return Promise.reject(e)}));var p=function(e,t){return function(){var r=(0,c.Z)((0,n.Z)().mark((function r(c){var a,l;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:"productCreateRequest"}),r.next=4,s.Z.post("".concat(o.fw,"/product/create-product"),e,t);case 4:a=r.sent,l=a.data,c({type:"productCreateSuccess",payload:l.product}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),c({type:"productCreateFail",payload:r.t0.response.data.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},x=function(e,t){return function(){var r=(0,c.Z)((0,n.Z)().mark((function r(c){var a,l;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:"productCreateRequest"}),r.next=4,s.Z.post("".concat(o.fw,"/product/create-category"),e,t);case 4:a=r.sent,l=a.data,c({type:"productCreateSuccess",payload:l.product}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),c({type:"productCreateFail",payload:r.t0.response.data.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,c.Z)((0,n.Z)().mark((function t(r){var c,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"getAllProductsShopRequest"}),t.next=4,s.Z.get("".concat(o.fw,"/product/get-all-products-shop/").concat(e));case 4:c=t.sent,a=c.data,r({type:"getAllProductsShopSuccess",payload:a.products}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"getAllProductsShopFailed",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,c.Z)((0,n.Z)().mark((function t(r){var c,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"deleteProductRequest"}),t.next=4,u.delete("".concat(o.fw,"/product/delete-shop-product/").concat(e),{withCredentials:!0});case 4:c=t.sent,s=c.data,r({type:"deleteProductSuccess",payload:s.message}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"deleteProductFailed",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var r,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"getAllProductsRequest"}),e.next=4,s.Z.get("".concat(o.fw,"/product/get-all-products"),{params:i});case 4:r=e.sent,c=r.data,t({type:"getAllProductsSuccess",payload:c.products}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"getAllProductsFailed",payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}},9229:function(e,t,r){"use strict";r.d(t,{LL:function(){return c},fw:function(){return n},tL:function(){return s}});var n="https://api.websolutionshub.in/api/v2",c="",s=""},5382:function(e,t){"use strict";t.Z={custom_container:"w-11/12 hidden sm:block",heading:"text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]",section:"w-11/12 mx-auto",productTitle:"text-[25px] font-[600] font-Roboto text-[#333]",productDiscountPrice:"font-bold text-[18px] text-[#333] font-Roboto",price:"font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through",shop_name:"pt-3 text-[15px] text-blue-400 pb-3",active_indicator:"absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]",button:"w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer",cart_button:"px-[15px] lg:px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer",cart_button_text:"text-[#fff] text-[14px] font-[600]",input:"w-full border p-1 rounded-[5px]",activeStatus:"w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]",noramlFlex:"flex items-center"}},2480:function(){}}]);