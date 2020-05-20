import { SingleDashTestCase } from './cases/single-dash-test-case';
import { DoubleDashTestCase } from './cases/double-dash-test-case';
import { LooseParamsTestCase } from './cases/loose-params-test-case';
import { DoubleSingleDashTestCase } from './cases/double-single-dash-test-case';
import { LooseParamsDoubleSingleDashTestCase } from './cases/loose-params-double-single-dash-test-case';

const line = '------------------------------';

export default class TestExecutor {

    static doTests() {
        let successfulTests = 0;

        const testSuite = [
            {
                'name': 'Single Dash Test Case',
                'impl': SingleDashTestCase
            },
            {
                'name': 'Double Dash Test Case',
                'impl': DoubleDashTestCase
            },
            {
                'name': 'Loose Parameters Test Case',
                'impl': LooseParamsTestCase
            },
            {
                'name': 'Double and Single Dash Test Case',
                'impl': DoubleSingleDashTestCase
            },
            {
                'name': 'Loose Parameters, Double and Single Dash Test Case',
                'impl': LooseParamsDoubleSingleDashTestCase
            }
        ];

        console.log('Initiating Tests...');
        console.log(`Tests found: ${testSuite.length}`);

        console.log('\n');
        console.log(line);

        testSuite.forEach((test, index) => {
            console.log(`Initiating Test ${index + 1}/${testSuite.length}: ${test.name}`);

            const testResult = test.impl();

            if (testResult.length === 0) {
                successfulTests++;
            }

            console.log(`${index + 1}/${testSuite.length} Test Result: ${testResult.length === 0 ? 'SUCCESS' : 'FAILED'}`);
            if (testResult.length > 0) {
                console.log(`Errors: `);
                testResult.forEach((error) => {
                    console.log(`-${error}`);
                });
                console.log('\n');
            }
            console.log(line);
        });

        console.log(`Final Result: ${successfulTests}/${testSuite.length} Tests Successful\n`);

        if (successfulTests < testSuite.length) {
            process.exit(1);
        } else {
            process.exit(0);
        }
    }

}