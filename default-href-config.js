/* globals DefaultHref */
// Example
new DefaultHref(
    { // CONFIGURATION OBJECT FOR DATA-DEFAULT-HREF SUPPORT
        scheme: 'web+bahaiwritings',
        name: "Bahá'í Writings Access Protocol",
        // autoActivationEventTriggers : ['start', 'click'],
        use_backup_url_if_not_enabled: true,
        handler_url: 'https://bahai-library.com/bahai-writings-handler/?q=%s',
        test_handler_url: 'https://bahai-library.com/test-bahai-web-protocol/test-bahai-web-protocol.html',
        not_supported_message:
            "Your browser does not support protocol registration, something which we would use to "+
            "allow you to make your own choice about which website you would wish to use to visit "+
            "specially-written Bahá'í Writings links as used on this page. Try Firefox to "+
            "get such functionality. If you click ok, you will now be redirected to your default URL, "+
            "and if you cancel, you will be able to stay on the page.",
        not_enabled_message:
            "You have not yet opted to register a handler for the \"web+bahaiwritings\" "+
            "protocol, a protocol which allows you to visit links which will direct you to "+
            "whatever Bahá'í Writings tool you prefer, so you will be redirected to "+
            "a default URL we have specified at bahai-library.com . You may, however, click cancel "+
            "to stay on this page and choose the protocol suggested by this page if it suggests one"
    }
);
