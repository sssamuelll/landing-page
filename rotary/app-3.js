(function($) {
  const getHtml = function(nodeEntry) {
    return nodeEntry.html;
  };
  Drupal.behaviors.rotary_rotaryorg_alerts = {
    attach: function (context) {
      $("#alert", context).prepend(
        
      );
    }
  };
})(jQuery);
;
Drupal.ad_tracking = Drupal.ad_tracking || {};

Drupal.behaviors.ad_tracking = {
  attach: function(context, settings) {
    if (!settings.ad_tracking || Drupal.settings.ad_tracking.initDone) {
      return;
    }

    for (i in settings.ad_tracking.enabledVendors) {
      if (Drupal.ad_tracking[settings.ad_tracking.enabledVendors[i]]) {
        Drupal.ad_tracking[settings.ad_tracking.enabledVendors[i]]();
      }
    }

    // Prevent this behavior from operating again.
    Drupal.settings.ad_tracking.initDone = true;
  }
}
;
/**
 * Utility function ro get the browser details (name & version).
 *
 * get_browser function uses User Agent string to detect browsers and their
 * version.
 */
(function ($) {
  Drupal.rotaryBrowserAlert = Drupal.rotaryBrowserAlert || {};
  Drupal.rotaryBrowserAlert.getBrowser = function() {
    // Match User Agent string with browser names.
    var ua = navigator.userAgent,tem,M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    // Match "trident" for IE.
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name:'MSIE',version:(tem[1]||'')};
    }
    if (M[1] === 'Chrome') {
      // Match for Opera.
      tem = ua.match(/\bOPR\/(\d+)/)
      if (tem != null) {
        return {
          name:'Opera',
          version:tem[1]
        };
      }
      // Match for Edge.
      tem = ua.match(/\bEdge\/(\d+)/)
      if (tem != null) {
        return {
          name:'Edge',
          version:tem[1]
        };
      }
    }
    if (M[1] === 'Safari') {
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        // Detect safari for iOS.
        if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
          return {
            name:'SafariIOS',
            version:tem[1]
          };
        }
        else {
          return {
            name:'SafariMac',
            version:tem[1]
          };
        }
      }
    }
    M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
      M.splice(1,1,tem[1]);
    }
    return {
      name: M[0],
      version: M[1]
    };
  }
})(jQuery);
;
(function ($) {
  Drupal.rotaryBrowserAlert = Drupal.rotaryBrowserAlert || {};
  Drupal.rotaryBrowserAlert.IeVersion = function() {
      //Set defaults
      var value = {
      IsIE: false,
      TrueVersion: 0,
      ActingVersion: 0,
      CompatibilityMode: false
    };

    //Try to find the Trident version number
    var trident = navigator.userAgent.match(/Trident\/(\d+)/);
    if (trident) {
      value.IsIE = true;
      //Convert from the Trident version number to the IE version number
      value.TrueVersion = parseInt(trident[1], 10) + 4;
    }

    //Try to find the MSIE number
    var msie = navigator.userAgent.match(/MSIE (\d+)/);
    if (msie) {
        value.IsIE = true;
          //Find the IE version number from the user agent string
      value.ActingVersion = parseInt(msie[1]);
    } else {
      //Must be IE 11 in "edge" mode
      value.ActingVersion = value.TrueVersion;
    }

    //If we have both a Trident and MSIE version number, see if they're different
    if (value.IsIE && value.TrueVersion > 0 && value.ActingVersion > 0) {
      //In compatibility mode if the trident number doesn't match up with the MSIE number
      value.CompatibilityMode = value.TrueVersion != value.ActingVersion;
    }
    return value;
  }
})(jQuery);
;
/**
 * @file
 * Client-side handling of outdated browser alert.
 *
 * If a user is using an old browser to browse the site, he will be shown the
 * outdated alert.
 *
 * Once the user dismisses this alert, a cookie is set with expiration date of
 * after 30 days.
 *
 * Every time the site is loaded in the browser, this cookie is checked. If it
 * is there, the alert is not displayed, otherwise it is.
 */
(function ($) {
  // Function to add alert html to DOM.
  function displayAlert(AlertHeader, AlertMsg) {
    $('#outdated-browser-alert h3').html(AlertHeader);
    $('#outdated-browser-alert p').html(AlertMsg);
    $('.outdated-browser-alert-wrapper').slideDown(300);
  }

  Drupal.behaviors.rotaryBrowserAlert = Drupal.behaviors.rotaryBrowserAlert || {};
  Drupal.rotaryBrowserAlert = Drupal.rotaryBrowserAlert || {};
  Drupal.behaviors.rotaryBrowserAlert.attach = function(context) {
    // Check for cookie.
    if (document.cookie.indexOf("oldBrowserAlertDismissed") == -1) {
      $('#outdated-browser-alert', context).once('outdated-browser-alerts-processed', function() {
        // Get the alert HTML & the actual message.
        var AlertHeader = Drupal.settings.rotaryBrowserAlert.rbaOutdatedHeader;
        var AlertMsg = Drupal.settings.rotaryBrowserAlert.rbaOutdatedMessage;
        IEDetails = Drupal.rotaryBrowserAlert.IeVersion();
        // Detect the browser and its version.
        var browser = Drupal.rotaryBrowserAlert.getBrowser();

        // For various browsers, check the version and display alert
        // accordingly.
        if (browser.name == 'MSIE') {
          IEDetails = Drupal.rotaryBrowserAlert.IeVersion();
          // Check for IE compatibility mode.
          if (IEDetails.CompatibilityMode) {
            AlertHeader = Drupal.settings.rotaryBrowserAlert.rbaCompatibilityHeader;
            AlertMsg = Drupal.settings.rotaryBrowserAlert.rbaCompatibilityMessage;
            displayAlert(AlertHeader, AlertMsg);
          }
          else if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaIE, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
        if (browser.name == 'Edge') {
          if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaEdge, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
        if (browser.name == 'Firefox') {
          if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaFirefox, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
        if (browser.name == 'Chrome') {
          if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaChrome, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
        if (browser.name == 'SafariMac') {
          if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaSafariMac, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
        if (browser.name == 'Opera') {
          if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaOpera, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
        if (browser.name == 'SafariIOS') {
          if (browser.version < parseInt(Drupal.settings.rotaryBrowserAlert.rbaSafariIOS, 10)) {
            displayAlert(AlertHeader, AlertMsg);
          }
        }
      });

      // Set cookie if user dismisses the alert.
      $('#outdated-browser-alert .alert-dismiss-link').on("click", function(){
        var now = new Date();
        now.setTime(now.getTime() + (parseInt(Drupal.settings.rotaryBrowserAlert.rbaReAppearence, 10) * 1000));
        document.cookie = "oldBrowserAlertDismissed = TRUE; expires=" + now.toUTCString() + "; path=/";

        // Hides the alert.
        $('.outdated-browser-alert-wrapper').slideUp(300);
      });
    }
  }
})(jQuery);
;
/**
 * @file
 * Defines and injects the cookie disclaimer onto the page.
 * Rotary Cookie Alert Message
 */

(function ($) {
  $(window).load(function() {
    var window_width = $(window).width();
    if ($.cookie('rotary_cookie_complaince') !== '1') {
      var disclaimer_html = '';
      var lang = $('html').attr('lang');
      var privacy_policy_link = '<a href="https://www.rotary.org/' + lang + '/privacy-policy">' + Drupal.t('políticas de privacidad') + '</a>';
      var disclaimer_text = Drupal.t('Este sitio web utiliza cookies. Al continuar, usted acepta nuestras !políticas_de_privacidad.', {'!políticas_de_privacidad': privacy_policy_link});
      // Building the compliance disclaimer html.
      disclaimer_html += '<div class="header-message-wrapper">';
      disclaimer_html += '<div class="header-message -information -with-button" id="cookie-message">';
      disclaimer_html +=     '<p>' + disclaimer_text + '</p>';
      disclaimer_html +=       '<button id="cookie_close" class="header-message-button">' + Drupal.t('cerrar') + '</button>';
      disclaimer_html += '</div>';
      disclaimer_html += '</div>';

      $('body').prepend(disclaimer_html);
    }

    $('#cookie_close').click(function() {
      // Set a cookie that will expire in a year.
      $.cookie('rotary_cookie_complaince', 1, {expires: 365, path: '/'});
      $('#cookie-message').fadeOut(300, function(){ $(this).remove();});
    });
  });

})(jQuery);
;
Drupal.behaviors.rotary_adobe_analytics = {
  attach: function(context, settings) {
    if (!Drupal.settings.rotary_adobe_analytics) {
      return;
    }
    if (typeof rotaryDDO == "undefined") {
      rotaryDDO = {};

      if (Drupal.settings.rotary_adobe_analytics.DTM.DDO) {
        rotaryDDO = Drupal.settings.rotary_adobe_analytics.DTM.DDO;
      }
    }

    this.extraBehaviors.forEach(function(v, i, a) {
      this.extraBehaviors[i].attach(context, settings);
    }, this);

    if (this.hasRun || !Drupal.settings.rotary_adobe_analytics) {
      return;
    }

    // Delayed action which awaits a condition and then fires.
    // condition: Function callback which returns true or false.
    // action: Function callback which is called when the condition is
    //   met.
    // interval: Number of milliseconds to wait between attempts.
    // attempts: Number of times to check for the condition before
    //   giving up.
    // shrug: Whether to take the action after attempts are exhausted,
    //   even if the condition is not met.
    var Await = function(condition, action, interval, attempts, shrug) {
      this.attemptsMade = 0;
      var thisAwait = this;
      this.timeoutCallback = function() {
        thisAwait.check();
      }

      this.condition = condition;
      this.action = action;

      if (typeof interval == "integer") {
        this.interval = interval;
      }
      if (typeof attempts == "integer") {
        this.maxAttempts = attempts;
      }
      if (typeof shrug == "boolean") {
        this.shrug = shrug;
      }

      this.check();
    }
    Await.prototype = {
      interval: 250,
      maxAttempts: 4,
      shrug: false,
      check: function() {
        if (this.condition()) {
          this.action();
        }
        else if (++this.attemptsMade < this.maxAttempts) {
          setTimeout(this.timeoutCallback, this.interval);
        }
        else if (this.shrug) {
          this.action();
        }
      }
    }

    var DTMScript = document.createElement("script");
    DTMScript.addEventListener(
      "load",
      {
        handleEvent: function(event) {
          new Await(
            function() {
              return performance.timing.loadEventEnd > 0;
            },
            function() {
              // Populate rotaryDDO's timing information.
              rotaryDDO.timeData = rotaryDDO.timeData || {};
              if (performance.timing.loadEventEnd > 0) {
                rotaryDDO.timeData.totalPageLoadTime
                  = performance.timing.loadEventEnd
                  - performance.timing.navigationStart;
              }

              _satellite.pageBottom();
            },
            25,
            40,
            true
          );
        }
      }
    );

    DTMScript.async = true;

    DTMScript.src = "//assets.adobedtm.com/"
      + Drupal.settings.rotary_adobe_analytics.DTM.id
      + "/"
      + Drupal.settings.rotary_adobe_analytics.DTM.script;

    // Include DTM.
    document.getElementsByTagName("head")[0].appendChild(DTMScript);

    this.hasRun = true;
  },
  extraBehaviors: [],
  hasRun: false
}
;
(function($) {
  Drupal.behaviors.rotary_adobe_analytics.extraBehaviors.push({
    attach: function(context, settings) {
      $formContext = $(
        "input[name=\"form_id\"][value=\"rotary_content_effectiveness_feedback_form\"]",
        context
      )
        .once("adobe-dtm-event-tracking")
        .closest("form");

      // These event handlers listen to "mousedown" rather than "click"
      // to match the behavior in rotary_content_effectiveness.
      $("input[type=\"submit\"][id~=\"edit-yes\"]", $formContext)
        .on("mousedown", function(e) {
          if (_satellite) {
            rotaryDDO.eventDetail = rotaryDDO.eventDetail || {};
            rotaryDDO.eventDetail.action = "Content Effectiveness: Yes";
            _satellite.track("Content Effectiveness");
          }
        });
      $("input[type=\"submit\"][id~=\"edit-no\"]", $formContext)
        .on("mousedown", function(e) {
          if (_satellite) {
            rotaryDDO.eventDetail = rotaryDDO.eventDetail || {};
            rotaryDDO.eventDetail.action = "Content Effectiveness: No";
            _satellite.track("Content Effectiveness");
          }
        });
      $("input[type=\"submit\"][id~=\"edit-sub-feedback\"]", $formContext)
        .on("mousedown", function(e) {
          if (_satellite) {
            rotaryDDO.eventDetail = rotaryDDO.eventDetail || {};
            rotaryDDO.eventDetail.action
              = "Content Effectiveness: Submit";
            rotaryDDO.eventDetail.contentEffectivenessFeedback
              = $(".form-item-verbatim textarea").val();
            _satellite.track("Content Effectiveness");
          }
        });
    }
  });
})(jQuery);
;
