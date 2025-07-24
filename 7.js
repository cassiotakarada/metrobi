function getMaxValue(carrotTypes, capacity) {
    const dp = new Array(capacity + 1).fill(0);
    
    for (let weight = 1; weight <= capacity; weight++) {
        for (let i = 0; i < carrotTypes.length; i++) {
            const carrot = carrotTypes[i];
            if (carrot.kg <= weight) {
                dp[weight] = Math.max(dp[weight], dp[weight - carrot.kg] + carrot.price);
            }
        }
    }
    
    return dp[capacity];
}

function getMaxValueWithDetails(carrotTypes, capacity) {
    const dp = new Array(capacity + 1).fill(0);
    const items = new Array(capacity + 1).fill(null).map(() => []);
    
    for (let weight = 1; weight <= capacity; weight++) {
        for (let i = 0; i < carrotTypes.length; i++) {
            const carrot = carrotTypes[i];
            if (carrot.kg <= weight) {
                const newValue = dp[weight - carrot.kg] + carrot.price;
                if (newValue > dp[weight]) {
                    dp[weight] = newValue;
                    items[weight] = [...items[weight - carrot.kg], i];
                }
            }
        }
    }
    
    const selectedCarrots = items[capacity];
    const carrotCount = {};
    selectedCarrots.forEach(index => {
        carrotCount[index] = (carrotCount[index] || 0) + 1;
    });
    
    return {
        maxValue: dp[capacity],
        carrots: Object.entries(carrotCount).map(([index, count]) => ({
            type: carrotTypes[parseInt(index)],
            count: count
        }))
    };
}

function demonstrateCarrotProblem() {
    console.log("🥕 CARROT KNAPSACK PROBLEM");
    console.log("=".repeat(40));
    
    const carrotTypes = [
        {kg: 5, price: 100}, 
        {kg: 7, price: 150}, 
        {kg: 3, price: 70}
    ];
    const capacity = 36;
    
    console.log("Available carrot types:");
    carrotTypes.forEach((carrot, index) => {
        console.log(`  Type ${index + 1}: ${carrot.kg}kg - $${carrot.price} (ratio: ${(carrot.price/carrot.kg).toFixed(2)})`);
    });
    
    console.log(`\nBag capacity: ${capacity}kg`);
    
    const maxValue = getMaxValue(carrotTypes, capacity);
    console.log(`\nMaximum value: $${maxValue}`);
    
    const detailed = getMaxValueWithDetails(carrotTypes, capacity);
    console.log("\nOptimal selection:");
    detailed.carrots.forEach(item => {
        console.log(`  ${item.count}x Type (${item.type.kg}kg, $${item.type.price})`);
    });
    
    const totalWeight = detailed.carrots.reduce((sum, item) => 
        sum + (item.count * item.type.kg), 0);
    console.log(`\nTotal weight: ${totalWeight}kg`);
    console.log(`Total value: $${detailed.maxValue}`);
}

function testDifferentScenarios() {
    console.log("\n" + "=".repeat(50));
    console.log("🧪 TESTING DIFFERENT SCENARIOS");
    console.log("=".repeat(50));
    
    const scenarios = [
        {
            name: "Original Example",
            carrotTypes: [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}],
            capacity: 36
        },
        {
            name: "Small Bag",
            carrotTypes: [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}],
            capacity: 10
        },
        {
            name: "High Value Light Carrots",
            carrotTypes: [{kg: 1, price: 50}, {kg: 2, price: 80}, {kg: 4, price: 120}],
            capacity: 15
        },
        {
            name: "Edge Case - Zero Capacity",
            carrotTypes: [{kg: 5, price: 100}, {kg: 7, price: 150}],
            capacity: 0
        }
    ];
    
    scenarios.forEach(scenario => {
        console.log(`\n📊 ${scenario.name}:`);
        console.log(`   Capacity: ${scenario.capacity}kg`);
        
        const result = getMaxValue(scenario.carrotTypes, scenario.capacity);
        console.log(`   Max Value: $${result}`);
        
        if (scenario.capacity > 0) {
            const detailed = getMaxValueWithDetails(scenario.carrotTypes, scenario.capacity);
            const totalWeight = detailed.carrots.reduce((sum, item) => 
                sum + (item.count * item.type.kg), 0);
            console.log(`   Weight Used: ${totalWeight}kg`);
        }
    });
}

if (require.main === module) {
    demonstrateCarrotProblem();
    testDifferentScenarios();
}

module.exports = { getMaxValue, getMaxValueWithDetails };
