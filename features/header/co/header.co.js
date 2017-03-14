var Header = function () {
    var headerLink = '#mainnav a';
    this.wishListInHeader = $('.wish-list a');
    this.logoImg = $('.desktop-header-logo');
    this.bannerHeaderText = $('.banner-text h1');
    this.bannerSubtitleText = $('.banner-text p');
    this.getAllHeaderLinks = $$(headerLink);


    this.getHeaderLinkByText = function (linkText) {
        return element(by.cssContainingText(headerLink, linkText));
    };
};


module.exports = new Header();
