function fb_logim(){
  
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((res)=>{
            console.log(res.user)
                    console.log(res.user.email)
                    console.log(res.user.DisplayName)
                    console.log(res.photoURL)
        })
        .catch((err)=>{
        console.log(err)
        })
        console.log(provider)
    
}
