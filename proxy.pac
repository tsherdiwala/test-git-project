function FindProxyForURL(url, host) {
    // Apple.com via proxy
    if (shExpMatch(url, "*api.hellowalla.com*")) {
      var proxy = "PROXY 127.0.0.1:8000";
      return proxy;
    }
    return "DIRECT";
}
