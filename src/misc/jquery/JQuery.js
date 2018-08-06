import $ from 'jquery';
import React, { Component } from 'react';
import './jquery.css';

//http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/jQuery_Basics.html
class JQuery extends Component {
  componentDidMount() {
    this.doDOMManipulations();
    this.doEventListeners();
    this.doAjax();
  }

  doDOMManipulations() {
    // Select an element that matches the element's unique id
    $('#hello').html('Hello, world!'); // Replace innerHTML
    $('#hello').addClass('green'); // Add CSS class

    // Select an element that matches the element's "unique id"
    $('#message').append('(id matched)'); // Append at the end

    // Select element(s) that match "HTML tag name" and process via implicit loop
    $('p').prepend('(tag-name matched)'); // Add in front

    // Select element(s) that match the "CSS classname" and process via explicit loop
    $('.red').each(function() {
      $(this).append('(class-name matched)');
      $(this).prepend('(class-name matched)');
    });

    // Apply many operations via chaining
    $('.red')
      .before('<p>Before</p>') // before the current element
      .after('<p>After</p>'); // after the current element
  }

  doEventListeners() {
    // Bind a onclick handler to a selected element
    $('#clickMeContainer').click(function() {
      $(this).html('You clicked me!');
      return false; // Prevent triggering the default handler
    });
    $('#form1').submit(function() {
      $('#clickMeContainer').html('You clicked submit!');
      return false; // Prevent triggering the default handler
    });

    // Bind onmouseover/onmouseout handlers to all selected elements
    $('p').mouseover(function() {
      $(this).addClass('green');
    });
    $('p').mouseout(function() {
      $(this).removeClass('green');
    });
  }

  doAjax() {
    $('#form2').submit(function(event) {
      event.preventDefault(); // Do not run the default action
      var submittedMessage = $(':text[name="message"]').val();
      $.ajax({
        type: 'POST',
        url: 'ajaxtest',
        data: { message: submittedMessage }
      })
        .done(function(responseText) {
          // Triggered if response status code is 200 (OK)
          $('.ajax .message').html('Response is: ' + responseText);
        })
        .fail(function(jqXHR, status, error) {
          // Triggered if response status code is NOT 200 (OK)
          alert(jqXHR.responseText);
        })
        .always(function() {
          // Always run after .done() or .fail()
          $('p:first').after('<p>Thank you.</p>');
        });
    });
  }

  render() {
    return (
      <div className="jquery">
        <h1>Trying out jquery</h1>
        <hr />
        <div>
          <h2>DOM manipulations</h2>
          <h2 id="hello">Hi!</h2>
          <p id="message" className="red">
            First Line
          </p>
          <p className="red">Second Line </p>
          <p>Third Line </p>
        </div>
        <hr />
        <div>
          <h2>Event Listeners</h2>
          <h2 id="clickMeContainer">Click Me</h2>
          <form id="form1" method="POST">
            <input type="submit" />
          </form>
        </div>
        <hr />
        <div className="ajax">
          <h2>Ajax</h2>
          <form id="form2" method="POST">
            <label>Enter your message: </label>
            <input type="text" name="message" />
            <br />
            <input type="submit" />
          </form>
          <p className="message">&nbsp;</p>
        </div>
      </div>
    );
  }
}
export default JQuery;
