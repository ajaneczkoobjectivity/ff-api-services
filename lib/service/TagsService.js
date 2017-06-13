var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import HttpClient, { APIMapping } from '../http';

var TagService = (_temp = _class = function () {
    function TagService() {
        _classCallCheck(this, TagService);
    }

    _createClass(TagService, null, [{
        key: 'getAllTags',
        value: function getAllTags() {
            return this.client.makeRequestSimple({}, '/tags', 'GET').then(function (s) {
                return s.data;
            });
        }
    }, {
        key: 'createTag',
        value: function createTag(body) {
            return this.client.makeRequestSimple(body, '/tags', 'POST').then(function (s) {
                return s.data;
            });
        }
    }, {
        key: 'getTagById',
        value: function getTagById(id) {
            return this.client.makeRequestSimple({}, '/tags/' + id, 'GET').then(function (s) {
                return s.data;
            });
        }
    }, {
        key: 'updateTag',
        value: function updateTag(body, id) {
            return this.client.makeRequestSimple(body, '/tags/' + id, 'PUT').then(function (s) {
                return s.data;
            });
        }
    }]);

    return TagService;
}(), _class.client = new HttpClient(APIMapping.tagService), _temp);
export { TagService as default };