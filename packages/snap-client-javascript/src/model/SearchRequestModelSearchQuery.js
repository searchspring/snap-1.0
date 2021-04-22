/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from SNAPI spec v0.1.13
 *
 */
import ApiClient from '../ApiClient';

/**
 * The SearchRequestModelSearchQuery model module.
 * @module model/SearchRequestModelSearchQuery
 * @version 0.1.13
 */
class SearchRequestModelSearchQuery {
	/**
	 * Constructs a new <code>SearchRequestModelSearchQuery</code>.
	 * @alias module:model/SearchRequestModelSearchQuery
	 */
	constructor() {
		SearchRequestModelSearchQuery.initialize(this);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj) {}

	/**
	 * Constructs a <code>SearchRequestModelSearchQuery</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/SearchRequestModelSearchQuery} obj Optional instance to populate.
	 * @return {module:model/SearchRequestModelSearchQuery} The populated <code>SearchRequestModelSearchQuery</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new SearchRequestModelSearchQuery();

			if (data.hasOwnProperty('string')) {
				obj['string'] = ApiClient.convertToType(data['string'], 'String');
			}
			if (data.hasOwnProperty('spellCorrection')) {
				obj['spellCorrection'] = ApiClient.convertToType(data['spellCorrection'], 'Boolean');
			}
		}
		return obj;
	}
}

/**
 * @member {String} string
 */
SearchRequestModelSearchQuery.prototype['string'] = undefined;

/**
 * @member {Boolean} spellCorrection
 */
SearchRequestModelSearchQuery.prototype['spellCorrection'] = undefined;

export default SearchRequestModelSearchQuery;