<?php include 'includes/header.php' ?>

<div class="teachform-wrapper">
  <section class="teachform-wrapper-section">
    <div class="teacherformheading">
      <h1 class="teacherformh1">CONTACT US</h1>
      <p>Want to know more about the curriculum? Would you like to take a look around the space? Let us know, we'll be happy to answer any questions about Code South Labs.</p>
      

    </div>
    <div id="contactform" class="theteacherform">
      <form>
          <div>
              <label for="form-name">Name</label><br/>
              <input class="teacherinput" id="form-name" type="text" required /><br/>
          </div>
          <div >
              <label for="form-email">Email</label><br/>
              <input class="teacherinput" id="form-email" type="email" required /><br/>
          </div>

          <div >
              <label for="form-phone">Phone</label><br/>
              <input class="teacherinput" id="form-phone" type="text" required /><br/>
          </div>
          
          <div>
              <label for="form-feedback-questions">Message</label><br/>
              <textarea class="teacherinput" id="form-feedback-questions" name="Feedback/Question" id="" cols="30" rows="10" required></textarea>
          </div>
          <div>
              <input id="contacter" class="sendteachermail" type="button" value="send" />
          </div>
      </form>
    </div>
    
    <div class="remodal" data-remodal-id="modal">
        <h1>Message Sent</h1>
         <h1 style="">Thank You For Contacting Us!</h1>
            <p>Someone will be in touch with you shortly.</p>
        <br>
        <a class="remodal-confirm" href="#" onclick="window.location.replace('index')">OK</a>
    </div>

    <div class="teachermailsent" id="thehiddenform">
      <section class="teachermailsentwrapper">
        <div id="" style="background:#ffffff;padding-top:60px;padding-bottom:60px; ">
          <section class="teachersentmessage">
           
          </section>
          
        </div>
      </section>
    </div>

  </section>
</div>



<?php include 'includes/footer.php' ?>
