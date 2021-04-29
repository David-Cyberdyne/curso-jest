test('2+2=4', () => {
    expect(2 + 2).toBe(4);
})

test('object validation', () => {
    const data = {username: 'Nombre'};
    const data2 = {username: 'Otro'};

    expect(data).toEqual({username: 'Nombre'});
    expect(data).not.toEqual(data2);
})