<?php  
$pagetitle = "Teach At CodeSouth";
$pagedescription = "We’re looking for talented individuals to join our growing team. Check out our list of positions to find current openings.";
$pagekeywords = "code school, code school in ms, learn how to code, learn wordpress, learn javascript, javascript classes, web development classes";
 ?>

<?php include 'includes/header.php' ?>

<div class="teachform-wrapper">
  <section class="teachform-wrapper-section">
    <div class="teacherformheading">
      <h1 class="teacherformh1">TEACH</h1>
      <p>We’re looking for talented individuals to join our growing team. Check out our list of positions to find current openings. If you would like to be a part of Code South Labs, hit us up.  </p>
      <h4 class="currentpositions">Current Positions:</h4>
      <div class="currentlist">
        <ul>
          <li>Web Development Immersive Instructor</li>
          <li>Part Time Front End Web Development Instructor</li>
          <li>Part Time Data Engineer/Analyst Instructor</li>
          <li>Part Time Ruby on Rails Instructor</li>
          <li>Part Time Java Instructor</li>
          <li>Part Time Python Instructor</li>
          <li>Social Media Instructor</li>
        </ul>
      </div>

    </div>
    <div id="theteacherform" class="theteacherform">
      <form>
          <div>
              <label for="form-name">Name</label><br/>
              <input class="teacherinput" id="form-name" type="text" required /><br/>
          </div>
          <div >
              <label for="form-email">Email</label><br/>
              <input class="teacherinput" id="form-email" type="email" required /><br/>
          </div>
          <div>
            <select name="course" required id="form-course">
              <option value="Web_Development_Immersive_Instructor">Web Development Immersive Instructor</option>
              <option value="Part_Time_Front_End_Web_Development_Instructor">Part Time Front End Web Development Instructor</option>
              <option value="Part_Time_Data_Engineer/Analyst_Instructor">Part Time Data Engineer/Analyst Instructor</option>
              <option value="Part_Time_Ruby_on_Rails_Instructor">Part Time Ruby on Rails Instructor</option>
              <option value="Part Time Java Instructor">Part Time Java Instructor</option>
              <option value="Part Time Python Instructor">Part Time Python Instructor</option>
              <option value="Social Media Instructor">Social Media Instructor</option>
              <option value="Choose" selected>Please select course interest..</option>
            </select>
          </div>
          <div>
              <label for="form-feedback-questions">Additional Info</label><br/>
              <textarea class="teacherinput" id="form-feedback-questions" name="Feedback/Question" id="" cols="30" rows="10" required></textarea>
          </div>
          <div>
              <input id="teacher" class="sendteachermail" type="button" value="send" />
          </div>
      </form>
    </div>
    
    <div class="remodal" data-remodal-id="modal">
        <h1>Message Sent</h1>
         <h1 style="">Thank You For Contacting Us!</h1>
            <p>We look forward to working with you! We will be in touch shortly.</p>
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
