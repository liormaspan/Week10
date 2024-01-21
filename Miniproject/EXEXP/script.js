const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    },
    {
        id: 11,
        name: 'Lior Maspan',
      username: 'liormaspan',
      email: 'Maspan123g@gmail.biz',
      image:'https://robohash.org/Y6N.png?set=set4'
    }
    ];


    function showRob(robot){
    robot.forEach(element => {
        const robot=document.getElementById("contain")
        // console.log(robot);
        const card=document.createElement("div")
        const image=document.createElement("img")
        image.src=element.image
        const name=document.createElement("h2")
        name.innerText=element.name
        const mail=document.createElement("p")
        mail.innerText=element.email
        robot.append(card)
        card.append(image,name,mail)
        // console.log(element);

        card.className="card"
        name.className="name"
        image.className="image"
        mail.className="mail"
    });

    }
   (showRob(robots));

    function dispalyName(robots){
        const myInput=document.getElementById("search")
        const myContain=document.getElementById("contain")
        myInput.addEventListener("input",(e)=>{
            const userName=myInput.value.toLowerCase()
            const filterName=robots.filter((robot)=>
            robot.name.toLowerCase().includes(userName)
        )
            myContain.innerHTML="";
            showRob(filterName)
        })
    }
dispalyName(robots)


    