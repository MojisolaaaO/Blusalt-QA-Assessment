class DynamicTablePage {
    visit() {
        return cy.visit('/dynamictable');
    }

    reloadPage() {
        return cy.reload();
    }

    cpuRow() {
        return cy.get("div[role='rowgroup'] div[role='row'] span");
    }

    chromeRow() {
        return cy.get("div[role='rowgroup'] div[role='row']").contains('span', 'Chrome').parent();
    }

    yellowLabel() {
        return cy.xpath("//p[@class='bg-warning']");
    }

    cpuValue() {
        return cy.get("span[role='cell']");
    }

    // New method to check Chrome CPU value against the yellow label
    verifyChromeCpuValue() {
        this.cpuRow().contains('CPU').invoke('index').then((cpuColumnIndex) => {
            this.chromeRow().within(() => {
                cy.get(`span:nth-child(${cpuColumnIndex + 1})`).invoke('text').then((chromeCpu) => {
                    const chromeCpuValue = chromeCpu.trim().replace('%', ''); // Remove '%' for comparison

                    this.yellowLabel().invoke('text').then((yellowLabelText) => {
                        const match = yellowLabelText.match(/(\d+(\.\d+)?)/);

                        if (match) {
                            const yellowCpuValue = match[0]; // Extract the numeric value
                            expect(parseFloat(chromeCpuValue)).to.equal(parseFloat(yellowCpuValue)); // Compare values
                        } else {
                            throw new Error('CPU value not found in the yellow label');
                        }
                    });
                });
            });
        });
    }
}

export default DynamicTablePage;