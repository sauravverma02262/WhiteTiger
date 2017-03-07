app.service('imageService', [function() {
        
        

        function getImageObject() {
            var images = [];
            for (var i = 1; i <= 100; i++) {
                images.push({
                    imageUrl: "image" + i + ".jpg",
                    title: "Children's happiness is all that matters",
                    description: "",
                    id: i
                })
            }
            return images;
        }

        console.log(this.images);
        this.getImages = function() {
            return getImageObject();
        }

    }])
    /*,{
            imageUrl: "image5.jpg",
            title: "Children's happiness is all that matters",
            description: "",
            id: 4
        }*/
