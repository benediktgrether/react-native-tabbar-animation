(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(166),o=a(139),l=a(4),u=a.n(l),s=a(3),c=a.n(s),f=a(5),h=a.n(f),m=a(6),v=a.n(m),d=a(7),p=a.n(d),g=a(8),V=a(30),k=a(9),y=function(e){function t(){return u()(this,t),h()(this,v()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:D.container},i.a.createElement(V.a,{style:{color:"#fff"}},"Feed Screen"))}}]),t}(n.Component),D=g.a.create({container:{flex:1,backgroundColor:"#394a6d",alignItems:"center",justifyContent:"center"}}),w=function(e){function t(){return u()(this,t),h()(this,v()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:C.container},i.a.createElement(V.a,{style:{color:"#fff"}},"Search Screen"))}}]),t}(n.Component),C=g.a.create({container:{flex:1,backgroundColor:"#3c9d9b",alignItems:"center",justifyContent:"center"}}),E=function(e){function t(){return u()(this,t),h()(this,v()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:A.container},i.a.createElement(V.a,{style:{color:"#fff"}},"Setting Screen"))}}]),t}(n.Component),A=g.a.create({container:{flex:1,backgroundColor:"#52debe",alignItems:"center",justifyContent:"center"}}),R=function(e){function t(){return u()(this,t),h()(this,v()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:b.container},i.a.createElement(V.a,{style:{color:"#fff"}},"Camera Screen"))}}]),t}(n.Component),b=g.a.create({container:{flex:1,backgroundColor:"#52af97",alignItems:"center",justifyContent:"center"}}),O=function(e){function t(){return u()(this,t),h()(this,v()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:M.container},i.a.createElement(V.a,{style:{color:"#fff"}},"Likes Screen"))}}]),t}(n.Component),M=g.a.create({container:{flex:1,backgroundColor:"#52de97",alignItems:"center",justifyContent:"center"}}),N=a(11),x=a.n(N),H=a(39),S=a(2),W=a(25),Z=a(21),B=S.a.createAnimatedComponent(Z.b),j=function(e){function t(){var e;return u()(this,t),(e=h()(this,v()(t).call(this))).state={fill:"none",scale:1,rotate:"0deg"},e.offsetValue=new S.a.Value(0),e.scaleValue=new S.a.Value(0),e.rotateValue=new S.a.Value(0),e}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){var e=this;S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start((function(){e.animationActive()}))}},{key:"animationActive",value:function(){this.setState({fill:"#313131",scale:this.scaleValue.interpolate({inputRange:[0,1,2],outputRange:[0,1.25,1]}),rotate:this.rotateValue.interpolate({inputRange:[0,1,2,3],outputRange:["0deg","-45deg","45deg","0deg"]})}),S.a.parallel([S.a.timing(this.scaleValue,{toValue:2,useNativeDriver:!0}),S.a.timing(this.rotateValue,{toValue:3,duration:400,delay:50,easing:W.a.inOut(W.a.quad),useNativeDriver:!0})]).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[0,150]}),t=this.state,a=t.fill,n=t.scale,r=t.rotate;return i.a.createElement(S.a.View,{style:{transform:[{scale:n},{rotate:r}]}},i.a.createElement(Z.c,{width:"31.64",height:"29.69",viewBox:"0 0 31.64 29.69"},i.a.createElement(B,{d:"M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z",transform:"translate(-0.18 -0.15)",fill:a,stroke:"#313131",strokeDasharray:"150",strokeDashoffset:e,strokeWidth:"3",origin:14.845,scale:.85})))}}]),t}(n.Component),L=S.a.createAnimatedComponent(Z.b),I=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).offsetValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[150,0]});return i.a.createElement(Z.c,{width:"31.64",height:"29.69",viewBox:"0 0 31.64 29.69"},i.a.createElement(L,{d:"M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z",transform:"translate(-0.18 -0.15)",fill:"none",stroke:"#313131",strokeDasharray:"150",strokeDashoffset:e,strokeWidth:"3",origin:14.845,scale:.85}))}}]),t}(n.Component),P=S.a.createAnimatedComponent(Z.b),q=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).state={fill:"none",scale:1,rotate:"0deg"},a.offsetValue=new S.a.Value(0),a.scaleValue=new S.a.Value(0),a.rotateValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){var e=this;S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start((function(){e.animationActive()}))}},{key:"animationActive",value:function(){this.setState({fill:"#313131",scale:this.scaleValue.interpolate({inputRange:[0,1,2],outputRange:[0,1.25,1]}),rotate:this.rotateValue.interpolate({inputRange:[0,1,2,3],outputRange:["0deg","-45deg","45deg","0deg"]})}),S.a.parallel([S.a.spring(this.scaleValue,{toValue:2,useNativeDriver:!0}),S.a.timing(this.rotateValue,{toValue:3,duration:400,delay:50,easing:W.a.inOut(W.a.quad),useNativeDriver:!0})]).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[0,125]}),t=this.state,a=t.fill,n=t.scale,r=t.rotate;return i.a.createElement(S.a.View,{style:{transform:[{scale:n},{rotate:r}]}},i.a.createElement(Z.c,{width:"29.17",height:"29.09",viewBox:"0 0 29.17 29.09"},i.a.createElement(P,{d:"M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z",transform:"translate(-1.42 -0.45)",fill:a,stroke:"#313131",strokeDasharray:"125",strokeDashoffset:e,strokeWidth:"3",origin:14.545,scale:.85})))}}]),t}(n.Component),F=(g.a.create({circlePositon:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center"}}),S.a.createAnimatedComponent(Z.b)),T=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).offsetValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[125,0]});return i.a.createElement(Z.c,{width:"29.17",height:"29.09",viewBox:"0 0 29.17 29.09"},i.a.createElement(F,{d:"M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z",transform:"translate(-1.42 -0.45)",fill:"none",stroke:"#313131",strokeDasharray:"125",strokeDashoffset:e,"stroke-miterlimit":"10",strokeWidth:"3",origin:14.545,scale:.85}))}}]),t}(n.Component),J=S.a.createAnimatedComponent(Z.b),Y=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).state={fill:"none",scale:1,rotate:"0deg"},a.offsetValue=new S.a.Value(0),a.scaleValue=new S.a.Value(0),a.rotateValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){var e=this;S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start((function(){e.animationActive()}))}},{key:"animationActive",value:function(){this.setState({fill:"#313131",scale:this.scaleValue.interpolate({inputRange:[0,1,2],outputRange:[0,1.25,1]}),rotate:this.rotateValue.interpolate({inputRange:[0,1,2,3],outputRange:["0deg","-45deg","45deg","0deg"]})}),S.a.parallel([S.a.spring(this.scaleValue,{toValue:2,useNativeDriver:!0}),S.a.timing(this.rotateValue,{toValue:3,duration:400,delay:50,easing:W.a.inOut(W.a.quad),useNativeDriver:!0})]).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[0,90]}),t=this.state,a=t.fill,n=t.scale,r=t.rotate;return i.a.createElement(S.a.View,{style:{transform:[{scale:n},{rotate:r}]}},i.a.createElement(Z.c,{width:"31.66",height:"27.74",viewBox:"0 0 31.66 27.74"},i.a.createElement(J,{d:"M29.25,15.6C27.43,19,19.77,24.89,17,27a1.69,1.69,0,0,1-1,.33A1.67,1.67,0,0,1,15,27C12.23,24.89,4.57,19,2.75,15.6a9.1,9.1,0,0,1,3-11.89,7.57,7.57,0,0,1,4-1.17A7.88,7.88,0,0,1,16,5.79a7.84,7.84,0,0,1,6.28-3.25,7.6,7.6,0,0,1,4,1.17A9.1,9.1,0,0,1,29.25,15.6Z",transform:"translate(-0.17 -1.04)",fill:a,stroke:"#313131",strokeDasharray:"90",strokeDashoffset:e,strokeWidth:"3",origin:13.87,scale:.85})))}}]),t}(n.Component),z=S.a.createAnimatedComponent(Z.b),G=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).offsetValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[150,0]});return i.a.createElement(Z.c,{width:"31.66",height:"27.74",viewBox:"0 0 31.66 27.74"},i.a.createElement(z,{d:"M29.25,15.6C27.43,19,19.77,24.89,17,27a1.69,1.69,0,0,1-1,.33A1.67,1.67,0,0,1,15,27C12.23,24.89,4.57,19,2.75,15.6a9.1,9.1,0,0,1,3-11.89,7.57,7.57,0,0,1,4-1.17A7.88,7.88,0,0,1,16,5.79a7.84,7.84,0,0,1,6.28-3.25,7.6,7.6,0,0,1,4,1.17A9.1,9.1,0,0,1,29.25,15.6Z",transform:"translate(-0.17 -1.04)",fill:"none",stroke:"#313131",strokeDasharray:"150",strokeDashoffset:e,strokeWidth:"3",origin:13.87,scale:.85}))}}]),t}(n.Component),K=S.a.createAnimatedComponent(Z.b),Q=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).state={fill:"none",scale:1,rotate:"0deg"},a.offsetValue=new S.a.Value(0),a.scaleValue=new S.a.Value(0),a.rotateValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){var e=this;S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start((function(){e.animationActive()}))}},{key:"animationActive",value:function(){this.setState({fill:"#313131",scale:this.scaleValue.interpolate({inputRange:[0,1,2],outputRange:[0,1.25,1]}),rotate:this.rotateValue.interpolate({inputRange:[0,1,2,3],outputRange:["0deg","-45deg","45deg","0deg"]})}),S.a.parallel([S.a.spring(this.scaleValue,{toValue:2,useNativeDriver:!0}),S.a.timing(this.rotateValue,{toValue:3,duration:400,delay:50,easing:W.a.inOut(W.a.quad),useNativeDriver:!0})]).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[0,95]}),t=this.state,a=t.fill,n=t.scale,r=t.rotate;return i.a.createElement(S.a.View,{style:{transform:[{scale:n},{rotate:r}]}},i.a.createElement(Z.c,{width:"31.42",height:"29.54",viewBox:"0 0 31.42 29.54"},i.a.createElement(Z.a,null,i.a.createElement(K,{d:"M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z",transform:"translate(-0.29 -0.23)",fill:a,stroke:"#313131",strokeDasharray:"95",strokeDashoffset:e,"stroke-miterlimit":"10",strokeWidth:"3",origin:14.77,scale:.85}),i.a.createElement(K,{d:"M30.21,26.58V27.7a.57.57,0,0,1-.6.57H2.38a.56.56,0,0,1-.59-.57V26.58A7.57,7.57,0,0,1,9.36,19H22.63A7.57,7.57,0,0,1,30.21,26.58Z",transform:"translate(-0.29 -0.23)",fill:a,stroke:"#313131",strokeDasharray:"95",strokeDashoffset:e,"stroke-miterlimit":"10",strokeWidth:"3",origin:14.77,scale:.85}))))}}]),t}(n.Component),U=S.a.createAnimatedComponent(Z.b),X=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).offsetValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[95,0]});return i.a.createElement(Z.c,{width:"31.42",height:"29.54",viewBox:"0 0 31.42 29.54"},i.a.createElement(Z.a,null,i.a.createElement(U,{d:"M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z",transform:"translate(-0.29 -0.23)",fill:"none",stroke:"#313131",strokeDasharray:"95",strokeDashoffset:e,"stroke-miterlimit":"10",strokeWidth:"3",origin:14.77,scale:.85}),i.a.createElement(U,{d:"M30.21,26.58V27.7a.57.57,0,0,1-.6.57H2.38a.56.56,0,0,1-.59-.57V26.58A7.57,7.57,0,0,1,9.36,19H22.63A7.57,7.57,0,0,1,30.21,26.58Z",transform:"translate(-0.29 -0.23)",fill:"none",stroke:"#313131",strokeDasharray:"95",strokeDashoffset:e,"stroke-miterlimit":"10",strokeWidth:"3",origin:14.77,scale:.85})))}}]),t}(n.Component),$=S.a.createAnimatedComponent(Z.b),_=function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).state={fill:"none",scale:1,rotate:"0deg"},a.offsetValue=new S.a.Value(0),a.scaleValue=new S.a.Value(0),a.rotateValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){var e=this;S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start((function(){e.animationActive()}))}},{key:"animationActive",value:function(){this.setState({fill:"#313131",scale:this.scaleValue.interpolate({inputRange:[0,1,2],outputRange:[0,1.25,1]}),rotate:this.rotateValue.interpolate({inputRange:[0,1,2,3],outputRange:["0deg","-45deg","45deg","0deg"]})}),S.a.parallel([S.a.spring(this.scaleValue,{toValue:2,useNativeDriver:!0}),S.a.timing(this.rotateValue,{toValue:3,duration:400,delay:50,easing:W.a.inOut(W.a.quad),useNativeDriver:!0})]).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[0,150]}),t=this.state,a=t.fill,n=t.scale,r=t.rotate;return i.a.createElement(S.a.View,{style:{transform:[{scale:n},{rotate:r}]}},i.a.createElement(Z.c,{width:"29.14",height:"29.14",viewBox:"0 0 29.14 29.14"},i.a.createElement($,{d:"M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z",transform:"translate(-1.43 -0.34)",fill:a,stroke:"#313131",strokeDasharray:"150",strokeDashoffset:e,strokeWidth:"3",origin:14.57,scale:.85})))}}]),t}(n.Component),ee=S.a.createAnimatedComponent(Z.b),te={active:{Feed:j,Search:q,Camera:_,Likes:Y,Profil:Q},inactive:{Feed:I,Search:T,Camera:function(e){function t(e){var a;return u()(this,t),(a=h()(this,v()(t).call(this,e))).offsetValue=new S.a.Value(0),a}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.animationOutline()}},{key:"animationOutline",value:function(){S.a.timing(this.offsetValue,{toValue:1,duration:400,useNativeDriver:!0}).start()}},{key:"render",value:function(){var e=this.offsetValue.interpolate({inputRange:[0,1],outputRange:[150,0]});return i.a.createElement(Z.c,{width:"29.14",height:"29.14",viewBox:"0 0 29.14 29.14"},i.a.createElement(ee,{d:"M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z",transform:"translate(-1.43 -0.34)",fill:"none",stroke:"#313131",strokeDasharray:"150",strokeDashoffset:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",origin:14.57,scale:.85}))}}]),t}(n.Component),Likes:G,Profil:X}},ae=function(e){function t(){var e,a;u()(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=h()(this,(e=v()(t)).call.apply(e,[this].concat(i)))).hndPress=function(){a.props.navigation.navigate(a.props.routeName)},a}return p()(t,e),c()(t,[{key:"render",value:function(){var e,t=this.props,a=t.routeName,n=t.isActive,r=t.label,o=te[n?"active":"inactive"][a];return 1==r&&(e=a),i.a.createElement(k.a,{style:ne.container},i.a.createElement(H.a,{onPress:this.hndPress,style:ne.button},i.a.createElement(k.a,{style:{alignItems:"center",paddingTop:12}},i.a.createElement(o,null),i.a.createElement(V.a,null,e))))}}]),t}(n.Component),ne=g.a.create({container:{flex:1,justifyContent:"space-around",alignItems:"center"},button:{flex:1,justifyContent:"center",alignItems:"center"}}),ie=function(e){function t(){return u()(this,t),h()(this,v()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.navigation,t=e.state,a=t.routes,n=t.index;return i.a.createElement(k.a,{style:{height:46,flexDirection:"row",justifyContent:"space-around",borderTopWidth:g.a.hairlineWidth}},a.map((function(t,a){return i.a.createElement(ae,x()({navigation:e,key:t.routeName},t,{isActive:n===a,label:!1}))})))}}]),t}(n.Component),re=Object(o.createBottomTabNavigator)({Feed:{screen:y},Search:{screen:w},Camera:{screen:R},Likes:{screen:O},Profil:{screen:E}},{tabBarComponent:function(e){return n.createElement(n.Fragment,null,n.createElement(ie,e),n.createElement(r.a,null))}}),oe=Object(o.createAppContainer)(re);function le(){return i.a.createElement(oe,null)}a.d(t,"a",(function(){return le})),console.disableYellowBox=!0},169:function(e,t,a){e.exports=a(220)}},[[169,1,2]]]);
//# sourceMappingURL=../../2605d22fa74d616248af.map