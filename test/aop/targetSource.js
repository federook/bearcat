var lib = process.env.BEARCAT_COV ? 'lib-cov' : 'lib';

var TargetSource = require('../../' + lib + '/aop/targetSource');

var should = require('should');

describe('TargetSource', function() {
	describe('TargetSource', function() {
		it('should do TargetSource right', function(done) {
			var targetSource = new TargetSource();
			var Car = function() {}
			targetSource.setBeanName('car');
			targetSource.setTarget(new Car());

			done();
		});
	});
});