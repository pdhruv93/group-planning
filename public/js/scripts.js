$(document).ready(function(){

    //Enabling Firestore Persistence
    db.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition')
        {
            // probably multible tabs open at once
            console.log('persistance failed');
        }
        else if (err.code == 'unimplemented')
        {
            // lack of browser support for the feature
            console.log('persistance not available');
        }
    });


    //Showing the Temp Plan for collaborating purpose
    db.collection('temp_plans').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            $(".droppable-area").html(change.doc.data().data);
            $("#preview").html($('.droppable-area').html());
        });
    });


    function saveTempData(){
        db.collection("temp_plans").doc("temp_data").set({
            data: $('.droppable-area').html()
        })
        .then(()=> {
            console.log("Temp Plan created for collaborating purpose!!");
        })
        .catch(err =>{
            console.log("Error while creating Temp Plan!!");
            console.log(err);
        });
    }


    $(document).on('click', '.preview', function(){
        $("#preview").toggle(500);
    });


    $( ".droppable-area" ).sortable({
        change: function( event, ui ) {saveTempData()},
        update: function( event, ui ) {saveTempData()}
    });

    $( ".sortable .button" ).draggable({
        helper: 'clone',
    });


    $( ".droppable-area" ).droppable({
        accept: '.sortable .button',
        drop: function( event, ui){
            var droppedItem=$(ui.draggable).clone();
            $(this).append(droppedItem);
            saveTempData();
        }
    })


    $(document).on('click', '.ui-draggable .delete', function(){
        $(this).closest('.button').remove();
        saveTempData();
    });

    

    $(document).on('click', '.publish', function(){

        console.log("Plan Published. Sending Data to Firestore DB..");
        $('.droppable-area .task').each(function(i, obj) {
            var shiftParent=$(this).prevAll(".shift").first();
            var shiftName=shiftParent.find("span:nth-child(2)").html()+"-"+shiftParent.find("span:nth-child(3)").html();
            var personParent=$(this).prevAll(".people").first();
            var personName=personParent.find("span").html();
            var taskName=$(this).find("span:nth-child(2)").html();

            console.log("Publishing shiftName="+shiftName+", personName="+personName+", taskName="+taskName);

            db.collection("plans/"+shiftName+"/person/"+personName+"/tasks").doc(taskName).set({})
            .then(()=> {
                console.log("Task created!!");
                $.toast('Plan Publshed!!');

                console.log("Sending IFTTT request to add entry to calendar!!");

                $.ajax({
                    url: "https://maker.ifttt.com/trigger/add_group_plan_to_cal/with/key/nUAQzI_yocZt3fh7MIXDK1N639A03wgwdeNlhbrVp88",
                    type: "POST",
                    data: {
                        "value1": shiftName.split("-")[0]+" "+shiftName.split("-")[1],
                        "value2": shiftName.split("-")[0]+" "+shiftName.split("-")[2],
                        "value3": taskName
                    },
                })
                .then(response => console.log("Entry added to Calendar!!")) 
                .catch(err => console.log(err));
            })
            .catch(err =>{
                console.log("Error while creating task!!");
                console.log(err);
            });
            
        });
        
    });

})

/*
References:
https://codepen.io/jyloo/pen/GjbmLm
*/