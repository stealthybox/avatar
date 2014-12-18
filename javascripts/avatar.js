// Generated by CoffeeScript 1.8.0
(function() {
  var Avatar;

  Avatar = (function() {
    var defaults;

    defaults = {
      useGravatar: true,
      useInitials: true,
      allowGravatarFallback: false,
      initials: '',
      initial_fg: '#888888',
      initial_bg: '#f4f6f7',
      initial_size: null,
      initial_weight: 100,
      initial_font_family: "'Lato', 'Lato-Regular', 'Helvetica Neue'",
      hash: null,
      email: null,
      size: 80,
      fallback: 'mm',
      rating: 'x',
      forcedefault: false,
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBmaWxsPSIjYmNjN2NlIiBkPSJNMCAwaDYwdjYwaC02MHoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNhNGIxYjkiIGQ9Ik0zMC4xIDU0LjhjLTYuNyAwLTEzLjEtMi44LTE3LjYtNy43bC0uNS0uNXYtMi42aC4yYy40LTQgMS42LTYuNyAzLjQtNy42IDEuMy0uNiAyLjktMS4xIDQuOS0xLjZ2LTFsMS0uM3MuNy0uMiAxLjctLjVjMC0uNS0uMS0uNy0uMS0uOS0uNi0xLTEuNS0zLjMtMi4xLTZsLTEuNy0xLjQuMi0uOXMuMi0uOSAwLTEuOWMtLjItLjkuMS0xLjUuMy0xLjguMy0uMy42LS41IDEtLjYuMy0xLjYuOS0zLjEgMS43LTQuMy0xLjMtMS41LTEuNy0yLjYtMS41LTMuNS4yLS45IDEtMS41IDEuOS0xLjUuNyAwIDEuMy4zIDEuOS42LjMtLjcuOS0xLjEgMS43LTEuMS43IDAgMS40LjQgMi40LjguNS4zIDEuMi42IDEuNi43IDMuNC4xIDcuNiAyLjIgOC45IDcuNi4zLjEuNi4zLjguNS40LjUuNSAxLjEuMyAxLjktLjIgMS4yIDAgMi40IDAgMi40bC4yLjgtMS4yIDEuMmMtLjUgMi44LTEuNiA1LjQtMi4yIDYuNS0uMS4xLS4xLjQtLjEuOCAxIC4zIDEuNy41IDEuNy41bDEgLjR2LjhjMi41LjUgNC42IDEuMSA2LjEgMS45IDEuOC45IDIuOSAzLjUgMy40IDcuOGwuMS42LS40LjVjLTQuNiA1LjktMTEuNSA5LjQtMTkgOS40eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00NS40IDM2LjhjLTEuNS0uOC0zLjktMS41LTctMnYtLjlzLTEtLjQtMi42LS43Yy0uMi0uOC0uMy0yIC4yLTIuOC41LS45IDEuNy0zLjYgMi4xLTYuNWwuOS0uOXMtLjMtMS40IDAtM2MuMi0uOS0uNC0uNy0uOS0uNS0uOS03LjEtNi4zLTcuNy03LjgtNy43LTEuNC0uMi0zLjktMi4yLTQuMS0xLjMtLjEuOSAxLjIgMS44LS40IDEuNC0xLjYtLjQtMy4xLTEuOC0zLjMtLjgtLjIuNyAxLjIgMi4zIDIgMy4xLTEuMiAxLjMtMi4xIDMuMi0yLjQgNi4xLS41LS4zLTEuNC0uNy0xLjEuMi4zIDEuMyAwIDIuNiAwIDIuNmwxLjQgMS4yYy41IDIuNyAxLjUgNS4xIDIgNiAuNS44LjMgMi4xLjIgMi44LTEuNS4zLTIuNi43LTIuNi43djEuMmMtMi41LjUtNC40IDEuMS01LjggMS43LTIgMS0yLjYgNS43LTIuNyA3Ljl2LjRjNC4xIDQuNCAxMCA3LjIgMTYuNSA3LjIgNy4zIDAgMTMuNy0zLjUgMTcuOC04LjgtLjEtMi4zLS44LTUuNy0yLjQtNi42eiIvPjwvZz48L3N2Zz4='
    };

    function Avatar(element, options) {
      if (options == null) {
        options = {};
      }
      if (element == null) {
        throw new Error('No image element provided.');
      }
      this.element = element;
      this.settings = this.merge(defaults, options);
      if (this.settings.useGravatar && this.settings.allowGravatarFallback) {
        this.setSource(this.gravatarUrl(this.settings));
      } else if (this.settings.useGravatar) {
        this.gravatarValid(this.settings.hash || this.settings.email, (function(_this) {
          return function() {
            return _this.setSource(_this.gravatarUrl(_this.settings));
          };
        })(this), (function(_this) {
          return function() {
            if (_this.settings.initials.length > 0) {
              return _this.setSource(_this.initialAvatar(_this.settings));
            } else {
              return _this.setSource(_this.settings.fallbackImage);
            }
          };
        })(this));
      } else {
        if (this.settings.initials.length > 0) {
          this.setSource(this.initialAvatar(this.settings));
        } else {
          this.setSource(this.settings.fallbackImage);
        }
      }
    }

    Avatar.prototype.setSource = function(source) {
      if (source) {
        this.element.src = source;
      }
    };

    Avatar.prototype.initialAvatar = function(options) {
      var canvas, context, font_size, height, width, x, y;
      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      width = this.element.width;
      height = this.element.height;
      x = width / 2;
      y = height / 2;
      font_size = options.initial_size || height / 2;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = "" + width + "px";
      canvas.style.height = "" + height + "px";
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
      context.rect(0, 0, canvas.width, canvas.height);
      context.fillStyle = options.initial_bg;
      context.fill();
      context.font = "" + options.initial_weight + " " + font_size + "px " + options.initial_font_family;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = options.initial_fg;
      context.fillText(options.initials, x, y);
      return canvas.toDataURL('image/png');
    };

    Avatar.prototype.gravatarUrl = function(options) {
      var email_or_hash;
      options = this.merge(defaults, options);
      options.size = (options.size >= 1 && options.size <= 2048 ? options.size : 80);
      email_or_hash = options.hash || options.email;
      if (!email_or_hash || typeof email_or_hash !== 'string') {
        email_or_hash = '00000000000000000000000000000000';
      }
      email_or_hash = email_or_hash.toLowerCase().trim();
      return ['https://secure.gravatar.com/avatar/', (email_or_hash.match(/@/g) !== null ? md5(email_or_hash) : email_or_hash), "?s=" + options.size, "&d=" + (encodeURIComponent(options.fallback)), "&r=" + options.rating, (options.forcedefault ? '&f=y' : '')].join('');
    };

    Avatar.prototype.gravatarValid = function(email_or_hash_or_url, on_load, on_error) {
      var image;
      if (email_or_hash_or_url == null) {
        email_or_hash_or_url = '';
      }
      if (/^(http|https):/i.test(email_or_hash_or_url)) {
        email_or_hash_or_url = "" + email_or_hash_or_url + "?d=404";
      } else {
        if (!email_or_hash_or_url || typeof email_or_hash_or_url !== 'string') {
          email_or_hash_or_url = '';
        } else if (email_or_hash_or_url.indexOf("@") !== -1) {
          email_or_hash_or_url = md5(email_or_hash_or_url);
        }
        email_or_hash_or_url = "https://secure.gravatar.com/avatar/" + email_or_hash_or_url + "?d=404";
      }
      image = new Image();
      image.onload = on_load;
      image.onerror = on_error;
      image.src = email_or_hash_or_url;
    };

    Avatar.prototype.merge = function(input, options) {
      var k, output, v;
      output = JSON.parse(JSON.stringify(input));
      for (k in options) {
        v = options[k];
        output[k] = v;
      }
      return output;
    };

    return Avatar;

  })();

  (typeof exports !== "undefined" && exports !== null ? exports : window).Avatar = Avatar;

  if (typeof jQuery !== 'undefined') {
    jQuery.fn['avatar'] = function(options) {
      return this.each(function() {
        if (!jQuery.data(this, 'plugin_avatar')) {
          jQuery.data(this, 'plugin_avatar', new Avatar(this, options));
        }
      });
    };
    return;
  }

}).call(this);
