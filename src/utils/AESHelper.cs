using System;
using System.IO;
using System.Reflection.Metadata;
using System.Security.Cryptography;
using System.Text;

namespace VideoConvertDemo
{
    public class AESHelper
    {
        // AES加密
        public static byte[] Encrypt(string plainText, string key, string iv)
        {
            try
            {
                byte[] keyArray = Encoding.UTF8.GetBytes(key);

                byte[] toEncryptArray = Encoding.UTF8.GetBytes(plainText);

                SymmetricAlgorithm des = Aes.Create();
                des.Key = keyArray;
                des.IV = Encoding.UTF8.GetBytes(iv);
                des.Mode = CipherMode.CBC;
                des.Padding = PaddingMode.PKCS7;
                ICryptoTransform cTransform = des.CreateEncryptor();
                byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
                return resultArray;
            }
            catch (Exception ex)
            {
                throw new Exception("加密失败: " + ex.Message);
            }
        }

        // AES解密
        public static string Decrypt(string cipherText, string key, string iv)
        {
            try
            {
                byte[] keyArray = Encoding.UTF8.GetBytes(key);

                byte[] toEncryptArray = Convert.FromBase64String(cipherText);

                SymmetricAlgorithm des = Aes.Create();
                des.Key = keyArray;
                des.Mode = CipherMode.CBC;
                des.Padding = PaddingMode.PKCS7;
                des.IV = Encoding.UTF8.GetBytes(iv);
                ICryptoTransform cTransform = des.CreateDecryptor();
                byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);

                return Encoding.UTF8.GetString(resultArray);
            }
            catch (Exception ex)
            {
                throw new Exception("解密失败: " + ex.Message);
            }
        }
    }
}
