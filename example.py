

def thereIsSum (array, num):
    for a in array: 
        for b in array: 
            if (a + b) is num:
                ret = [a, b]
                return ret
    return  []


def find_close