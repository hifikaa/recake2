(self.webpackChunkmy_recake=self.webpackChunkmy_recake||[]).push([[355],{7355:(t,e,i)=>{"use strict";i.r(e),i.d(e,{AdminModule:()=>w});var a=i(1116),o=i(5366),n=i(3337),d=i(3957),s=i(7112),l=i(4369),r=i(7307),u=i(168),c=i(667),p=i(7064);let g=(()=>{class t{constructor(t,e){this.router=t,this.api=e,this.mode="side"}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(n.F0),o.Y36(d.s))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-admin"]],decls:28,vars:9,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side",1,"sidenav-left",3,"position","opened","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,e){if(1&t){const t=o.EpF();o.ynx(0),o.TgZ(1,"mat-toolbar",0),o.TgZ(2,"button",1),o.NdJ("click",function(){return o.CHM(t),o.MAs(12).toggle()}),o.TgZ(3,"mat-icon"),o._uU(4,"menu"),o.qZA(),o.qZA(),o.TgZ(5,"span"),o._uU(6,"Recake"),o.qZA(),o._UZ(7,"div",2),o.TgZ(8,"button",3),o.NdJ("click",function(){return e.logout()}),o._uU(9,"Logout"),o.qZA(),o.qZA(),o.TgZ(10,"mat-sidenav-container",4),o.TgZ(11,"mat-sidenav",5,6),o.TgZ(13,"mat-nav-list"),o.TgZ(14,"mat-list-item",7),o.TgZ(15,"mat-icon",8),o._uU(16,"dashboard"),o.qZA(),o.TgZ(17,"h3",9),o._uU(18,"Dashboard"),o.qZA(),o.qZA(),o.TgZ(19,"mat-list-item",10),o.TgZ(20,"mat-icon",8),o._uU(21,"camera_enhance"),o.qZA(),o.TgZ(22,"h3",9),o._uU(23,"Resep"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(24,"mat-sidenav",11,6),o.TgZ(26,"mat-sidenav-content",12),o._UZ(27,"router-outlet"),o.qZA(),o.qZA(),o.BQk()}2&t&&(o.xp6(11),o.Q6J("position","start")("opened",!0)("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0),o.xp6(13),o.Q6J("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[s.Ye,l.lW,r.Hw,u.TM,u.JX,c.Hk,c.Tg,n.rH,c.Nh,p.X2,u.Rh,n.lC],styles:[""]}),t})(),Z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"dashboard works!"),o.qZA())},styles:[""]}),t})();var h=i(1265),m=i(1041),f=i(2935),T=i(3070),b=i(9550);let k=(()=>{class t{constructor(t,e,i){this.dialogRef=t,this.data=e,this.api=i,this.loading=!1}ngOnInit(){}saveData(){this.loading=!0,null==this.data.id?this.api.post("books",this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyyimpan data")}):this.api.put("books/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f.so),o.Y36(f.WI),o.Y36(d.s))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-product-detail"]],decls:20,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(o.TgZ(0,"h3",0),o._uU(1," Detail Resep\n"),o.qZA(),o.TgZ(2,"div",1),o.TgZ(3,"mat-form-field",2),o.TgZ(4,"mat-label"),o._uU(5,"Judul"),o.qZA(),o.TgZ(6,"input",3),o.NdJ("ngModelChange",function(t){return e.data.title=t}),o.qZA(),o.qZA(),o.TgZ(7,"mat-form-field",2),o.TgZ(8,"mat-label"),o._uU(9,"Penulis"),o.qZA(),o.TgZ(10,"input",3),o.NdJ("ngModelChange",function(t){return e.data.author=t}),o.qZA(),o.qZA(),o.TgZ(11,"mat-form-field",2),o.TgZ(12,"mat-label"),o._uU(13,"Tahun Terbit"),o.qZA(),o.TgZ(14,"input",3),o.NdJ("ngModelChange",function(t){return e.data.year=t}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(15,"div",4),o.TgZ(16,"button",5),o._uU(17,"Batal"),o.qZA(),o.TgZ(18,"button",6),o.NdJ("click",function(){return e.saveData()}),o._uU(19),o.qZA(),o.qZA()),2&t&&(o.xp6(6),o.Q6J("ngModel",e.data.title),o.xp6(4),o.Q6J("ngModel",e.data.author),o.xp6(4),o.Q6J("ngModel",e.data.year),o.xp6(4),o.Q6J("disabled",e.loading),o.xp6(1),o.Oqu(e.loading?"Menyimpan..":"Simpan"))},directives:[f.uh,f.xY,T.KE,T.hX,b.Nt,m.Fj,m.JJ,m.On,f.H8,l.lW,f.ZT],styles:[""]}),t})();var q=i(7672),A=i(2797);function x(t,e){1&t&&(o.TgZ(0,"div",2),o._UZ(1,"mat-spinner"),o.qZA())}function _(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA(),o.TgZ(9,"td",7),o.TgZ(10,"button",9),o.NdJ("click",function(){const e=o.CHM(t),i=e.$implicit,a=e.index;return o.oxw(2).productDetail(i,a)}),o._uU(11,"Edit"),o.qZA(),o.TgZ(12,"button",10),o.NdJ("click",function(){const e=o.CHM(t),i=e.$implicit,a=e.index;return o.oxw(2).deleteProduct(i.id,a)}),o._uU(13),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit,i=e.index,a=o.oxw(2);o.xp6(2),o.Oqu(i+1),o.xp6(2),o.Oqu(t.title),o.xp6(2),o.Oqu(t.author),o.xp6(2),o.Oqu(t.year),o.xp6(4),o.Q6J("disabled",a.loadingDelete[i]),o.xp6(1),o.Oqu(a.loadingDelete[i]?"Menghapus..":"Delete")}}function U(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"mat-card"),o.TgZ(1,"mat-card-header"),o.TgZ(2,"mat-card-title"),o._uU(3),o.qZA(),o.qZA(),o.TgZ(4,"mat-card-content"),o.TgZ(5,"div",3),o._UZ(6,"span",4),o.TgZ(7,"button",5),o.NdJ("click",function(){return o.CHM(t),o.oxw().productDetail({},-1)}),o._uU(8,"Tambah Resep"),o.qZA(),o.qZA(),o.TgZ(9,"table",6),o.TgZ(10,"thead"),o.TgZ(11,"th"),o._uU(12,"No"),o.qZA(),o.TgZ(13,"th"),o._uU(14,"Judul"),o.qZA(),o.TgZ(15,"th"),o._uU(16,"Penulis"),o.qZA(),o.TgZ(17,"th"),o._uU(18,"Tahun Terbit"),o.qZA(),o.TgZ(19,"th",7),o._uU(20,"#"),o.qZA(),o.qZA(),o.TgZ(21,"tbody"),o.YNc(22,_,14,6,"tr",8),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=o.oxw();o.xp6(3),o.Oqu(t.title),o.xp6(19),o.Q6J("ngForOf",t.books)}}const v=[{path:"",component:g,children:[{path:"dashboard",component:Z},{path:"product",component:(()=>{class t{constructor(t,e){this.dialog=t,this.api=e,this.book={},this.books=[],this.loading=!1,this.loadingDelete={},this.title="Products",this.getBooks()}ngOnInit(){this.title="Resep Kue",this.book={title:"resep kue nastar",author:"via",year:"2021"},this.getBooks()}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1})}productDetail(t,e){this.dialog.open(k,{width:"400px",data:t}).afterClosed().subscribe(i=>{i&&(-1==e?this.books.push(i):this.books[e]=t)})}deleteProduct(t,e){confirm("Delete item?")&&(this.loadingDelete[e]=!0,this.api.delete("books/"+t).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{this.loadingDelete[e]=!1,alert("Tidak dapat menghapus data")}))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f.uw),o.Y36(d.s))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"]],template:function(t,e){1&t&&(o.YNc(0,x,2,0,"div",0),o.YNc(1,U,23,2,"mat-card",1)),2&t&&(o.Q6J("ngIf",e.loading),o.xp6(1),o.Q6J("ngIf",!e.loading))},directives:[a.O5,q.$g,A.a8,A.dk,A.n5,A.dn,l.lW,a.sg],styles:[""]}),t})()},{path:"",pathMatch:"full",redirectTo:"/admin/dashboard"}]}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez,n.Bz.forChild(v),h.M,m.u5]]}),t})()}}]);