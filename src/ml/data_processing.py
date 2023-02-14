import pandas as pd
from os import listdir


def load_data():
    df = pd.read_csv('./ml/data.csv')
    return df

def read_json():
    df = pd.read_json('./ml/airbnb5000.json', lines=True, orient='records')
    return df

# convert json to csv
def convert_csv(df):
    df.to_csv('./ml/data.csv', index=False)

# list files in directory
def list_files():
    files = listdir('./')
    return files

# main function
def main():
    print(list_files())
    print("#"*10)
    df = read_json()
    convert_csv(df)
    data = load_data()
    print(data.head())
    


if __name__ == '__main__':
    main()
