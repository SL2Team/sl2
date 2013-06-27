/*
 * This basic module is necessary as an import to every SL
 * source code. It defines the builtins.
 */

function toArray(x) {
    return Array.prototype.slice.call(x);
};

function liftCurry(f) {
    return function () {
	var args = toArray(arguments);
	if (args.length >= f.length) {
	    return f.apply(this, args);
	} else {
	    return curry(f, args, f.length - args.length);
	}
    } 
};

function curry(f, args, missing) {
    if (args.length<1) {
        return f; //nothing to curry with - return function
    }

    return function () {
	var nargs = args.concat(toArray(arguments));
	if (arguments.length >= missing) {
	    return f.apply(this, nargs);
	} else {
	    return curry(f, nargs, missing - arguments.length);
	}
    }

};

function _add(arg1) {
    return function(arg2) {
	return arg1 + arg2;
    };
};

var _adds = _add;

var _addr = _add;

function _sub(arg1) {
    return function(arg2) {
	return arg1 - arg2;
    };
};

var _subr = _sub;

function _mul(arg1) {
    return function(arg2) {
	return arg1 * arg2;
    };
};

var _mulr = _mul;

function _div(arg1) {
    return function(arg2) {
	return Math.floor(arg1 / arg2);
    };
};

function _divr(arg1) {
    return function(arg2) {
	return arg1 / arg2;
    };
};


function _eq(l){
    return function(r){
	return l == r;
    };
}

function _geq(l)
{
    return function(r)
    {
	return l >= r;
    };
}

function _leq(l)
{
    return function(r)
    {
	return l <= r;
    };
}

function _lesser(l)
{
    return function(r)
    {
	return l < r;
    };
}

function _greater(l)
{
    return function(r)
    {
	return l > r;
    };
}

function $not(arg) {
    return !arg;
}

function _yield(r) {
  return function() { return r; };
}

function _bind(l) {
  return function(r) {
      return function() {
	  /* l is a monad yielding a value, so evaluate l*/
	  var lv = l();
	  /* r is a function yielding a monad, evaluate r and then the result */
	  return r(lv)();
      }
  };
}

function _bindnr(l) {
  return function(r) {
      return function() {
	  var lv = l();
	  return r();
      };
  };
}
;
;
var $Nil = 0;
var _Cons = 1;
function $Cons(_arg0)
{
  function f(_arg1)
  {
    return {_cid : 1, _var0 : _arg0, _var1 : _arg1
    }
  };
  return f
};
var $True = true;
var $False = false;
;
var _ExternalDOM = 0;
function $ExternalDOM(_arg0)
{
  return {_cid : 0, _var0 : _arg0
  };
  return f
};
;
var $ExternalString = 0;
;
var $ExternalVoid = 0;
;
var $ExternalChar = 0;
;
var $ExternalReal = 0;
;
var $ExternalInt = 0;
function $yield(_arg0)
{
  if(true)
  {
    var $x = _arg0;
    var $40 = $ExternalDOM;
    var $39 = $x;
    var _return = $40($39);
    return _return
  }
  else 
  {
    throw "Pattern not exhaustive!"
  }
};
function $chr(_arg0)
{
  if(true)
  {
    var $x = _arg0;
    var _return = "c";
    return _return
  }
  else 
  {
    throw "Pattern not exhaustive!"
  }
};
function $u$u(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = $True;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $z(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = 4;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $o$o(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = "Concat";
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $o(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = 1;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $g(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = $True;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $g$u(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = $False;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $s(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = 2;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $h(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = $False;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $t$u(_arg0)
{
  return function (_arg1)
  {
    if((((_arg0["_cid"] === _ExternalDOM) && true) && true))
    {
      var $x = _arg0["_var0"];
      var $f = _arg1;
      var $42 = $ExternalDOM;
      var $41 = $x;
      var _return = $42($41);
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $z$u(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = $False;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $ord(_arg0)
{
  if(true)
  {
    var $x = _arg0;
    var _return = 5;
    return _return
  }
  else 
  {
    throw "Pattern not exhaustive!"
  }
};
function $p(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = 3;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $h$u(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var _return = $True;
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};
function $t(_arg0)
{
  return function (_arg1)
  {
    if((true && true))
    {
      var $x = _arg0;
      var $y = _arg1;
      var $47 = $t$u;
      var $46 = $x;
      var $45 = $47($46);
      var $43 = function (_arg0)
      {
        if(true)
        {
          var $r = _arg0;
          var $44 = $y
        }
        else 
        {
          throw "Pattern for lambda expression did not match arguments"
        };
        return $44
      };
      var _return = $45($43);
      return _return
    }
    else 
    {
      throw "Pattern not exhaustive!"
    }
  }
};